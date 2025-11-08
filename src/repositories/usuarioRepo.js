const USER_UPDATE_WHITELIST = new Set(["nombre", "email", "rol_id"]);


export class UsuarioRepository {
  /**
   * @param {import('mysql2/promise').Pool} pool
   */
  constructor(pool) {
    this.pool = pool;
  }

  async insert(rowSnake) {
    const sql = `INSERT INTO usuarios (nombre, email, password_hash, rol_id )
        VALUES (?,?,?,?)
        `;
    const params = [rowSnake.nombre, rowSnake.email, rowSnake.password_hash, rowSnake.rol_id];
    const [res] = await this.pool.execute(sql, params);
    return res.insertId;
  }

  async findById(id) {
    const sql = `SELECT id_usuario, nombre, email, password_hash, rol_id, created_at, updated_at
    FROM usuarios WHERE id_usuario = ? LIMIT 1
    `;

    const [rows] = await this.pool.execute(sql, [id]);
    return rows[0] ?? null;
  }

  async findByEmail(email) {
    const sql = `SELECT id_usuario, nombre, email, password_hash, rol_id, created_at, updated_at
    FROM usuarios WHERE email = ? LIMIT 1
    `;
    const [rows] = await this.pool.execute(sql, [email]);
    return rows[0] ?? null;
  }

  async updatePartial(id, fieldSnake) {
    //entradas
    const entries = Object.entries(fieldSnake).filter(([k, v]) => {
      return USER_UPDATE_WHITELIST.has(k) && v != null;
    });
    if (entries.length === 0) return false;

    const setSql = entries.map(([k]) => `${k} = ?`).join(", ");
    const params = entries.map(([, v]) => v);
    params.push(id);

    const sql = `UPDATE usuarios SET ${setSql} WHERE id_usuario = ? LIMIT 1`;

    const [res] = await this.pool.execute(sql, params);

    return res.affectedRows > 0;
  }

  async updatePassword(id, newHash) {
    const sql = `UPDATE usuarios SET password_hash = ? WHERE id_usuario = ? LIMIT 1`;
    const params = [newHash, id];
    const [res] = await this.pool.execute(sql, params);

    return res.affectedRows > 0;
  }

  async remove(id) {
    const sql = `DELETE FROM usuarios WHERE id_usuario = ? LIMIT 1`;

    const [res] = await this.pool.execute(sql, [id]);

    return res.affectedRows > 0;
  }
}

// const whitelist = new Set(["nombre", "edad"]);

// const obj = { nombre: "jordi", edad: "undefisdadned" };
// const id = 1;

// function algo() {
//   const entries = Object.entries(obj).filter(([k, s]) => {
//     return whitelist.has(k) && s != null;
//   });

//   if (typeof entries[1][(0, 1)] === "string") return "false";
//   if (entries.length === 0) return false;

//   const setql = entries.map(([k]) => `${k} = ?`).join(", ");
//   const setparams = entries.map(([, v]) => v);
//   setparams.push(id);
//   console.log("sql", setql, setparams);
// }
// algo();
