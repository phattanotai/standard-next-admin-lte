const utilily_ft = require("../functions/utility.function");
const tb_news = require('../models/tb_news');

module.exports.getAllNews = (req, res) => {
    try{
        apilog('Get news all');
        await tb_news.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find news result successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find news error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getNewsById = (req, res) => {
    try{
        apilog('Get news by id');
        apilog('params::==', req.params);
        const news_id = req.params.id
        if (news_id) {
            await tb_news.find({ _id: news_id }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find news id " + news_id + " successfully", news_id)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find news id " + news_id + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find news id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getNewsByAgent = (req, res) => {
    try{
        apilog('Get news by agent_code');
        apilog('params::==', req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_news.find({ agent_code: agent_code, news_status: 1 }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find news agent_code " + agent_code + " successfully", agent_code)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find news agent_code " + agent_code + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find news id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createNews = (req, res) => {
    try{
        apilog('Post create news');
        apilog('body::==' + req.body);
    
        const news = req.body;
    
        if (news) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            news.create_at = tz;
            news.update_at = tz;
            const News = new tb_news(news);
            await News.save().then(
                function (result) {
                    apiDebuglog("news save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("news save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("news save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateNews = (req, res) => {
    try{
        apilog('Put Update news');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const news = req.body;
        const newsId = req.params.id
    
        if (news && newsId) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            news.update_at = tz;
            await tb_news.findByIdAndUpdate(newsId, { $set: news }).then(
                function (result) {
                    apiDebuglog("alert update id " + newsId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("news save id " + newsId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("news update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteNews = (req, res) => {
    try{
        apilog('Delete news by id');
        apilog('params::==' + req.params);
        const newsId = req.params.id
        if (newsId) {
            await tb_news.findByIdAndDelete({ _id: newsId }).then(
                function (result) {
                    apiDebuglog("delete news id " + newsId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Delete news id " + newsId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete news error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

