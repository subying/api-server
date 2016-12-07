/*
 *@fileOverview 首页
*/
const articlePad  = require('../db/article');

module.exports = async function(ctx){
    //await articlePad.add('测试','test con'); //新增
    //await articlePad.update(6,{title:'test123',content:'tt-text'}); //修改
    //await articlePad.delete(5); // 删除

    var list = await articlePad.getData(4);

    ctx.body = list;
};
