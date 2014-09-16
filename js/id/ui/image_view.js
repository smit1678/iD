iD.ui.ImageView = function (context) {
    function imageView() { }

    imageView.showEmpty = function () {
        var imageWrapper = context.container()
            .select('#mapillaryImage');

        imageWrapper.html('');

        var content = imageWrapper
            .append('div');

        content.append('div')
            .on('click', function(){
                imageWrapper.classed('hidden', true);
            });

        content.append('div')
            .html(marked(t('mapillary.no_image_found')));
    };

    imageView.show = function (imageToShow) {
        var key = imageToShow.properties.key;
        var imageWrapper = context.container().select('#mapillaryImage');
        imageWrapper.classed('hidden', false);
        imageWrapper.html('');
        var content = imageWrapper
            .append('div');
        content.append('button')
                .on('click', function(){
                    imageWrapper.classed('hidden', true);
                })
                .append('div')
                .attr('class', 'icon close');
        var wrap = content.append('div');
        wrap.append('div')
            .append('img')
            .attr('src', 'https://d1cuyjsrcm0gby.cloudfront.net/KEY/thumb-320.jpg'.replace('KEY', key));
        var wrapLink = wrap.append('a')
                        .attr('class', 'link')
                        .attr('target', '_blank')
                        .attr('src', 'http://mapillary.com/map/im/KEY'.replace('KEY', key));
        wrapLink.append('span')
            .attr('class','icon icon-pre-text out-link')
        wrapLink.append('span')
            .text(t('mapillary.view_on_mapillary'))
    };

    return imageView;
};
