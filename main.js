module.exports = {
  /**
   *
   * @param {Number} num
   * @param {Number} digits
   * @returns {String} صيغة الرقم
   * @author ZAMPX
   */
  numberFormatter: (num, digits) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "ألف" },
      { value: 1e6, symbol: "مليون" },
      { value: 1e9, symbol: "مليار" },
      { value: 1e12, symbol: "بليون" },
      { value: 1e15, symbol: "بليار" },
      { value: 1e18, symbol: "تريليون" },
      { value: 1e21, symbol: "تريليار" },
      { value: 1e24, symbol: "كريليون" },
      { value: 1e27, symbol: "كزيليار" },
      { value: 1e30, symbol: "سنكليون" },
      { value: 1e33, symbol: "سنكليار" },
      { value: 1e36, symbol: "سيزيليون" },
      { value: 1e39, symbol: "سيزيليار" },
      { value: 1e42, symbol: "سيتليون" },
      { value: 1e45, symbol: "سيتليار" },
      { value: 1e48, symbol: "ويتليون" },
      { value: 1e51, symbol: "ويتليار" },
      { value: 1e54, symbol: "تيفليون" },
      { value: 1e57, symbol: "تفيليار" },
      { value: 1e60, symbol: "ديشليون" },
      { value: 1e63, symbol: "ديشليار" },
      /**
       * تعبت
       * هبدليون
       * هبدليار
       * 😂
       * دبشليون
       * دبشليار
       * 🤣
       */
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  },
};
