export function mapDomainErrorToHttp(err) {
  if (err instanceof TypeError || err instanceof RangeError) return 400;
  switch (err?.message) {
    //auth
    case "EMAIL_TAKEN":
      return 409;
    case "INVALID_CREDENTIALS":
      return 401;
    case "AUTH_REPO_UNAVAILABLE":
      return 503;
    case "REFRESH_INVALID":
      return 401;
    case "REFRESH_EXPIRED":
      return 401;
    case "INVALID_TOKEN":
      return 401;
    case "REGISTER_READ_BACK_FAILED":
      return 500;
    case "EMAIL_REQUIRED":
      return 400;
    case "PASSWORD_REQUIRED":
      return 400;

    //producto
    case "PRODUCT_NAME_TOO_SHORT":
      return 400;
    case "PRODUCT_NAME_INVALID":
      return 400;
    case "PRODUCT_PRICE_INVALID":
      return 400;
    case "PRODUCT_STOCK_INVALID":
      return 400;
    case "PRODUCT_CATEGORY_INVALID":
      return 400;
    case "PRODUCT_DUPLICATE":
      return 409;
    case "CATEGORY_NOT_FOUND":
      return 422;
    case "PRODUCT_IN_USE":
      return 409;

    // categoría
    case "CATEGORY_NAME_TOO_SHORT":
      return 400;
    case "CATEGORY_NAME_TOO_LONG":
      return 400;
    case "CATEGORY_DUPLICATE":
      return 409;
    case "CATEGORY_IN_USE":
      return 409;
    default:
      return 500;
  }
}
