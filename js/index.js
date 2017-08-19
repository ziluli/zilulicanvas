/**
 * Created by dell on 2017/5/18.
 */
window.onload = function () {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let qianbi = document.querySelector('.icon-qianbi');
    let zhixian = document.querySelector('.icon-xiaobiao-');
    let duobian = document.querySelector('.icon-duobianxing');
    let juxing = document.querySelector('.icon-juxing');
    let baocun = document.querySelector('.icon-baocun');
    let xiazai = document.querySelector('.icon-14');
    let img = document.querySelector('img');
    let chexiao = document.querySelector('.icon-iocnchexiao');
    let yuan = document.querySelector('.icon-yuan');
    let xuxian = document.querySelector('.icon-xuxian');
    let duojiaoxing = document.querySelector('.icon-duojiaoxing');
    let yuanjiaojuxing = document.querySelector('.icon-yuanjiaojuxing');
    let eraser = document.querySelector('.eraser');
    let eraserBtn = document.querySelector('.icon-xiangpi');
    let mask = document.querySelector('.mask');
    let word = document.querySelector('.icon-wenzi');
    let clipBtn = document.querySelector('.clip');
    let clip = document.querySelector('.icon-msnui-tailor');
    let create = document.querySelector('.icon-iconfontxinjian');

    let strok = document.querySelector('.icon-miaobian');
    let strokeIn = document.querySelector('.strokeIn');
    let fillIn = document.querySelector('.fillIn');
    console.log(fillIn)
    let fill = document.querySelector('.icon-youqi');


    let palette = new Palette(canvas, ctx, mask);

    qianbi.onclick = function () {
        palette.pencil();

    };
    zhixian.onclick = function () {
        palette.line();
    };
    duobian.onclick = function () {
        let num = prompt('请输入（）边形');
        palette.polygon(num);
    };

    juxing.onclick = function () {
        palette.rectangle();
    };

    baocun.onclick = function () {
        let data = canvas.toDataURL('image/png');
        img.src = data;
    };

    xiazai.onclick = function () {
        let data = canvas.toDataURL('image/png').replace('data:image/png', 'data:stream/octet');
        location.href = data;
    };

    document.body.onkeydown = function (e) {
        if (e.ctrlKey && e.keyCode == 90) {
            palette.cancel();
        }
    };
    chexiao.onclick = function () {
        palette.cancel();
    };
    yuan.onclick = function () {
        palette.circle();
    };
    xuxian.onclick = function () {
        palette.dashed();
    };
    duojiaoxing.onclick = function () {
        let num = prompt('请输入（）角形');
        palette.polygonJ(num);
    };
    yuanjiaojuxing.onclick = function () {
        palette.roundrect(10);
    };

    eraserBtn.onclick = function () {
        let w = prompt('请输入橡皮的尺寸', '10');
        palette.clear(w, w, eraser);
    };
    word.onclick = function () {
        palette.word();
    };

    //剪切
    clip.onclick = function () {
        palette.clip(clipBtn);
    };
    //新建
    create.onclick = function () {
        palette.create();
    };

    //描边
    strok.onclick = function () {
        palette.type = 'stroke';
    };
    strokeIn.onchange = function () {
        console.log(palette.strokeStyle = `${this.value}`);
    };
    //填充.
    fill.onclick = function () {
        palette.type = 'fill';
    };
    fillIn.onchange = function () {
        console.log(palette.fillStyle = `${this.value}`);
    };
};
