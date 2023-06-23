import loaderImage from '../../assets/loader-1.gif';

const LoaderGif = () => {
  return (
    <div style={{ maxHeight: '100vh', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={loaderImage} alt='photo' style={{ maxWidth: '80px', maxHeight: '120px', marginTop: '100px' }} />
    </div>
  );
};

export default LoaderGif;
