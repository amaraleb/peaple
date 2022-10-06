import React from "react";
import peapleicon from "../../img/peaple.png";

export default function CreatePost() {
  return (
    <div className="wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <img src={peapleicon} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className="create-post">
        <h1>Criar</h1>

        <form className="create-post__form">
          <div className="create-post__form-name">
            <label for="name" className="label-name">
              Título
            </label>
            <input type="text" id="name" name="title" />
          </div>
          <div className="create-post__form-content">
            <label for="content" className="label-name">
              Conteúdo
            </label>
            <textarea name="content" id="content"></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>

      <div className="app-footer">Peaple 2022</div>
    </div>
  );
}
