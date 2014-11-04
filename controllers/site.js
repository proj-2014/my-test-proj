
var config = require('../config');


exports.index = function (req, res, next){
	/*
	res.render('index', {
        topics: topics,
        current_page: page,
        list_topic_count: limit,
        tops: tops,
        no_reply_topics: no_reply_topics,
        pages: pages,
        tabs: config.tabs,
        tab: tab,
        pageTitle: tabName && (tabName + '版块'),
      });
      */
	res.send('this is index for test.');
	return ;
}