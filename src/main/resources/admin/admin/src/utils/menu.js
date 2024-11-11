const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"试剂管理",
                        "menuJump":"列表",
                        "tableName":"shiji"
                    }
                ],
                "menu":"试剂管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"安全管理",
                        "menuJump":"列表",
                        "tableName":"anquan"
                    }
                ],
                "menu":"安全管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"存储管理",
                        "menuJump":"列表",
                        "tableName":"cunchu"
                    }
                ],
                "menu":"存储管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "出入库",
                            "删除"
                        ],
                        "menu":"出入库管理",
                        "menuJump":"列表",
                        "tableName":"shijiChuruInout"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除",
                            "报表"
                        ],
                        "menu":"出入库详情管理",
                        "menuJump":"列表",
                        "tableName":"shijiChuruInoutList"
                    }
                ],
                "menu":"出入库管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除",
                            "审核",
                            "报表"
                        ],
                        "menu":"使用记录管理",
                        "menuJump":"列表",
                        "tableName":"shiyong"
                    }
                ],
                "menu":"使用记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告资讯管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告资讯管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"危险程度管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryAnquan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"存储类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCunchu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"试剂类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShiji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"使用记录类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShiyong"
                    }
                ],
                "menu":"基础数据管理"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
            {
                "backMenu":[
                    {
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"试剂管理",
                                "menuJump":"列表",
                                "tableName":"shiji"
                            }
                        ],
                        "menu":"试剂管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                ],
                                "menu":"安全管理",
                                "menuJump":"列表",
                                "tableName":"anquan"
                            }
                        ],
                        "menu":"安全管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                ],
                                "menu":"存储管理",
                                "menuJump":"列表",
                                "tableName":"cunchu"
                            }
                        ],
                        "menu":"存储管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "出入库",
                                    "删除"
                                ],
                                "menu":"出入库管理",
                                "menuJump":"列表",
                                "tableName":"shijiChuruInout"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "删除"
                                ],
                                "menu":"出入库详情管理",
                                "menuJump":"列表",
                                "tableName":"shijiChuruInoutList"
                            }
                        ],
                        "menu":"出入库管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                ],
                                "menu":"使用记录管理",
                                "menuJump":"列表",
                                "tableName":"shiyong"
                            }
                        ],
                        "menu":"使用记录管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"公告资讯管理",
                                "menuJump":"列表",
                                "tableName":"gonggao"
                            }
                        ],
                        "menu":"公告资讯管理"
                    }
                    /*,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据备份",
                                "menuJump":"列表",
                                "tableName":"beifen"
                            },
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据还原",
                                "menuJump":"列表",
                                "tableName":"huanyuan"
                            }
                        ],
                        "menu":"数据库管理"
                    }*/
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"用户",
                "tableName":"yonghu"
            }
]
    }
}
export default menu;