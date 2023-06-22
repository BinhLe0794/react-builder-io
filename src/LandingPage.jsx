import { BuilderComponent, builder } from '@builder.io/react';
import {useState,useEffect} from 'react'
// Khởi tạo khóa API của Builder.io
builder.init('c3e608d290054ae883d908eed66c2724');

const LandingPage = () => {
  const [builderContentJson, setBuilderContentJson] = useState(null);


  useEffect(() => {
    builder.get('page', { url: location.pathname, entry: '9c0c5b4b1c394b8b9fdb21cf4ff9174b' })
    .promise()
    .then(setBuilderContentJson);
  }, []);

  console.log('🚀 ~ LandingPage ~ builderContentJson:', builderContentJson);
  return (
    <div>
      <h1>Welcome to My Landing Page</h1>
      <BuilderComponent model='landing' content={builderContentJson} />
    </div>
  );
};

export default LandingPage;
