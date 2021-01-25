import S3MCacheFileRenderEntity from './S3MCacheFileRenderEntity';
    

    let S3MContentFactory = {
        'OSGBFile' : function(options) {
            return new S3MCacheFileRenderEntity(options);
        },
        'OSGBCacheFile' : function(options) {
            return new S3MCacheFileRenderEntity(options);
        }
    };

    export default S3MContentFactory;

