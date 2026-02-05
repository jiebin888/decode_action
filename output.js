//Thu Feb 05 2026 06:15:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
$("#Query").click(function () {
  var _0x171546 = $("input[name='msg']").val();
  var _0xdfe33 = layer.load(2, {
    "shade": [0.1, "#fff"]
  });
  $.ajax({
    "type": "POST",
    "url": "query.php",
    "data": {
      "msg": _0x171546
    },
    "dataType": "json",
    "success": function (_0x17cc37) {
      {
        layer.close(_0xdfe33);
        if (_0x17cc37.code == 1) {
          layer.alert(_0x17cc37.msg, {
            "skin": "layui-layer-molv",
            "closeBtn": 0
          });
          $("#name").html(_0x17cc37.hero + "个性语音");
          $("#Img").click(function () {
            {
              layer.photos({
                "photos": {
                  "title": "英雄图像",
                  "id": 1,
                  "start": 0,
                  "data": [{
                    "alt": "英雄图像",
                    "pid": 1,
                    "src": _0x17cc37.img,
                    "thumb": _0x17cc37.img
                  }]
                },
                "anim": 5
              });
            }
          });
          for (i = 0; i < _0x17cc37.count; i++) {
            $("#table").append("<tr><td><input type='text' style='width: 100%;' class='layui-input' value='" + _0x17cc37.data[i].lines + "' readOnly/></td><td><button class='layui-btn layui-btn-sm' style='width: 100%;' onclick='image(" + _0x17cc37.data[i].id + ")'>播放语音<audio src='" + _0x17cc37.data[i].voice + "' id='" + _0x17cc37.data[i].id + "'></audio></button></td></tr>");
          }
          $("#state").html("<button class=\"layui-btn layui-btn-disabled layui-btn-fluid\">刷新后可重新查询</button>");
          $("#show").show();
        } else {
          layer.msg(_0x17cc37.msg, {
            "icon": 2,
            "anim": 6
          });
        }
      }
    },
    "error": function () {
      {
        layer.confirm("失败！", {
          "btn": ["确定", "取消"],
          "icon": 3,
          "title": "提示"
        }, function () {
          layer.closeAll();
        });
      }
    }
  });
});
function image(_0x266b38) {
  var _0x56afa2 = document.getElementById(_0x266b38);
  _0x56afa2.play();
}
_0xodD = "jsjiami.com.v6";