
import { list } from '@vercel/blob';
import { get } from '@vercel/edge-config';

const getImages = async () => {
    try {
        const { blobs } = await list({ token: process.env.NEXT_PUBLIC_ACCESS_TOKEN || '' });
      // const blobs = ''
     //  console.log('banana', blobs);
        return blobs
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

const getDb = async () => {
    try{
       const response = await get('images');
       console.log('response', response);
    }catch(error) {
        console.error('Error fetching db:', error);
    }
}


const ImageList = async () => {
    const images = await getImages();
    await getDb()

    if (!images) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            jajaja    </div>
    );
}

export default ImageList;