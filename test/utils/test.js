const assert = require("assert");
const utils = require('../../utils/utils.js');

var opt_checker = function (opt) {
    it('should have a valid title', function () {
        assert.notEqual(opt.title, undefined)
    })

    it('should have a valid description', function () {
        assert.notEqual(opt.description, undefined)
    })

    if (opt.news != undefined) {
        opt.news.forEach((subhead, subhead_idx) => {
            it('should have a subhead:' + subhead_idx + ' with valid content_subhead', function () {
                assert.notEqual(subhead.content_subhead, undefined)
            })
            it('should have a subhead:' + subhead_idx + ' with valid contents', function () {
                assert.notEqual(subhead.contents, undefined)
            })
            if (subhead.contents != undefined) {
                subhead.contents.forEach((content, index) => {
                    it('content:' + index + ' should have a newsid', function () {
                        assert.notEqual(content.newsid, undefined)
                    })        
                    it('content:' + index + ' should have a content_head', function () {
                        assert.notEqual(content.content_head, undefined)
                    })
                    it('content:' + index + ' should have a post_title', function () {
                        assert.notEqual(content.post_title, undefined)
                    })
                    it('content:' + index + ' should have a post_author', function () {
                        assert.notEqual(content.post_author, undefined)
                    })
                    it('content:' + index + ' should have a post_category_ref', function () {
                        assert.notEqual(content.post_category_ref, undefined)
                    })
                    it('content:' + index + ' should have a post_category', function () {
                        assert.notEqual(content.post_category, undefined)
                    })
                    it('content:' + index + ' should have a post_description', function () {
                        assert.notEqual(content.post_description, undefined)
                    })
                    if (content.avatar != undefined) {
                        it('content:' + index + ' could have a avatar_text', function () {
                            assert.notEqual(content.avatar_text, undefined)
                        })
                    }
                    if (content.showHide_id != undefined) {
                        it('content:' + index + ' could have a showHide_id', function () {
                            assert.notEqual(content.showHide_id, undefined)
                        })
                    }
                });
            }
        })
    }
};

describe('opt functions', function () {
    describe('index', function () {
        opt_checker(utils.opt_index());
    })
    describe('about', function () {
        opt_checker(utils.opt_about());
    })
    describe('donate', function () {
        opt_checker(utils.opt_donate());
    })
});