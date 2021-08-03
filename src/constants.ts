export default {
  /**
   *  Don't forget to generate your own steam webkey
   *  Check https://steamcommunity.com/dev and https://steamcommunity.com/dev/registerkey for more info
   */
  webkey: '9189C9572D2C046FF30E1C6D6ACF6D30',
  /**
   * Steam app ID
   * Replace with your app id
   */
  appId: '1659240',
  /**
   * SteamID (User id)
   * Replace this with some valid steam user id. Check if this id owns the appid above
   * This field will be used during tests
   * See https://steamid.io
   */
  steamId: 'STEAM_0:1:59950353',
  /**
   * Useful during transaction creation
   * Steam automatically converts from this currency to the user local currency.
   * But you can change as you please.
   */
  currency: 'usd',
  /**
   * Used
   */
  locale: 'en',
  /**
   * Set true if you want to enable sandbox mode
   * Please check https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox for more info
   */
  development: process.env.NODE_ENV == 'test' || true,
};
