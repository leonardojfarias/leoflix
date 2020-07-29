import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import data from './data/dados_iniciais.json'
import Carousel from './components/Carousel'
function App() {
  return (
    <div style={{ background: " #141414" }}>
      <Menu />
      <BannerMain videoTitle={data.categorias[0].videos[0].titulo}
        videoDescription={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}></BannerMain>

      <Carousel ignoreFirstVideo={false} category={data.categorias[0]} ></Carousel>
      <Carousel ignoreFirstVideo={false} category={data.categorias[1]} ></Carousel>
      <Carousel ignoreFirstVideo={false} category={data.categorias[2]} ></Carousel>
      <Carousel ignoreFirstVideo={false} category={data.categorias[3]} ></Carousel>

    </div >
  );
}

export default App;
