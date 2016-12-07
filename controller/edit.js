/*
 *@fileOverview 编辑
 *@auth subying
*/
const articlePad  = require('../db/article');

module.exports = async function(ctx){
    console.log(ctx.method);
    if(ctx.method == 'GET'){
        var data = await articlePad.getData(ctx.params.id);

        ctx.render(data,'edit');
    }else{
        var body = ctx.request.body;
        await articlePad.update(body.id,{title:'testv',content:body.con});
        ctx.body = 'ok';
    }

};
