//Fri Feb 27 2026 01:58:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function GetData01(_0x495200) {
  const _0x1c1fdf = _0x495200;
  var _0x19d51c = aesCbcDecrypt(_0x1c1fdf);
  if (_0x19d51c == "") {
    return {};
  }
  const _0x5396ca = "非法侵入计算机信息系统罪,我方公司保留报警和起诉权利";
  if (_0x19d51c.startsWith(_0x5396ca)) {
    _0x19d51c = _0x19d51c.replace(_0x5396ca, "");
    _0x19d51c = UrlDecBase64(_0x19d51c);
  }
  return JSON.parse(_0x19d51c);
}
const aaa = [["=", "*|"], ["1", "aa|a"], ["2", "ab|a"], ["3", "ba|a"], ["4", "t|tc"], ["5", "t|ts"], ["8", "r|oq"], ["9", "f|oz"], ["0", "j|rz"]];
function escapeRegExp(_0x4ebec3) {
  return _0x4ebec3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function UrlDecBase64(_0x105814) {
  for (const [_0x319fb0, _0x4b7aa6] of aaa) {
    {
      _0x105814 = _0x105814.replaceAll(_0x4b7aa6, _0x319fb0);
    }
  }
  const _0x5472d3 = CryptoJS.enc.Base64.parse(_0x105814);
  return CryptoJS.enc.Utf8.stringify(_0x5472d3);
}
function aesCbcDecrypt(_0x1c4fcc) {
  try {
    {
      const _0x288ab8 = CryptoJS.enc.Base64.parse(_0x1c4fcc);
      const _0x351ddb = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(window.location.origin).toString());
      const _0x3219c9 = CryptoJS.enc.Utf8.parse("cAnByjySGOstUlMc".padEnd(16, ""));
      const _0x441835 = CryptoJS.AES.decrypt({
        ciphertext: _0x288ab8
      }, _0x351ddb, {
        iv: _0x3219c9,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      const _0x22dd27 = _0x441835.toString(CryptoJS.enc.Utf8);
      return _0x22dd27;
    }
  } catch (_0x499d5e) {
    {
      return "";
    }
  }
}
encode_version = "jsjiami.com.v5";