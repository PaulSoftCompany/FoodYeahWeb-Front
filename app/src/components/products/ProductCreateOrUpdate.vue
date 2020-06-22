<template>
  <div>
    <h1 class="title">{{model.productId ? model.name : 'Nuevo producto'}}</h1>
    <h2 class="subtitle">{{model.productId ? model.description : 'Creación de producto.'}}</h2>

    <Loader/>
    <form @submit.prevent="save">
      <div class="field">
        <input
         

          class="input"
          type="text"
          placeholder="Ingrese el nombre"
        />
       
      </div>
      <div class="field">
        <input
        
          class="input"
          type="number"
          placeholder="Ingrese el precio"
        />
       
      </div>
      <div class="field">
        <textarea
         
          class="textarea"
          rows="2"
          placeholder="Ingrese la descripción"
        ></textarea>
       
      </div>
      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script src="./ProductCreateOrUpdate.js"></script>