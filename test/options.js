module.exports = [
    {
        url: '/getInfo',
        method: 'get',
        data: [
            {
                status: false,
                reason: "中文品牌名错误",
            },
            {
                status: false,
                reason: "英文品牌名错误",
            },
            {
                status: false,
                reason: "品牌别称名错误",
            },
            {
                status: false,
                reason: "品牌子分类错误",
            },
            {
                status: false,
                reason: "品牌介绍错误",
            },
            {
                status: false,
                reason: "国货选择错误",
            },
            {
                status: false,
                reason: "官网地址错误",
            },
            {
                status: false,
                reason: "站外平台错误",
            },
            {
                status: false,
                reason: "品牌logo错误",
            },
            {
                status: false,
                reason: "品牌介绍页错误",
            },
        ]
    },
    {
        url: '/postInfo',
        method: 'post',
        data: {
            trademark_cert: {
                status: false,
                reason: "商标注册证不清晰",
                show: true,
            },
            brand_id: {
                status: false,
                reason: "品牌名称奇异",
                show: true,
            },
            trademark_no: {
                status: false,
                reason: "商标注册号不好",
                show: true,
            },
            trademark_time: {
                status: false,
                reason: "证书有限期不行",
                show: true,
            },
            main_category_id: {
                status: false,
                reason: "主营累不嘛不太行",
                show: true,
            },

            safe_filing1: {
                status: false,
                reason: "不行1",
                show: this.showUploadBeautiful,
            },
            safe_filing2: {
                status: false,
                reason: "不行2",
                show: this.showUploadFood,
            },

            sole_cert: {
                status: false,
                reason: "一级证书",
                show: this.brandRelationValue === 2,
            },
            sole_time: {
                status: false,
                reason: "有效期1",
                show: this.brandRelationValue === 2,
            },
            brand_cert: {
                status: false,
                reason: "品牌证书",
                show: this.brandRelationValue === 3,
            },
            brand_time: {
                status: false,
                reason: "有效期2",
                show: this.brandRelationValue === 3,
            },
        }
    }
]
