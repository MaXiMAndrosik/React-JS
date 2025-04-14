import React from 'react';

const ImageList = ({images}) => {
    return (
        <div className="image-list">
            {images.map(image => (
                <div key={image.id} className="image-container">
                    <img alt={image.description} src={image.urls.small}/>
                </div>
            ))}

        </div>
    );
};

export default ImageList;
