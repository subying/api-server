/*
 *@fileOverview 数据库读取
 *@auth subying
*/
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const setting = require('../libs/setting'); //设置
const _dbFile = path.join(__dirname,setting.db.file);

class dbCtrl{
    constructor(){
        const _file = _dbFile;
        this.file = _file;
        this.db = new sqlite3.Database(_file);
    }

    run(sql,param){
        const db = this.db;
        return new Promise((resolve,reject) => {
            db.run(sql,param || {},(err,rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            });
        });
    }

    exec(sql){
        const db = this.db;
        return new Promise(function(resolve, reject){
            db.run(sql,(err,rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            });
        });
    }

    all(sql){
        const db = this.db;
        return new Promise(function(resolve, reject){
            db.all(sql,(err,rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            });
        });
    }

    get(sql){
        const db = this.db;
        return new Promise(function(resolve, reject){
            db.get(sql,(err,rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            });
        });
    }

    close(){
        this.db.close();
    }
}

module.exports = dbCtrl;
