<template>
  <div>
    <h1 class="title">Módulo de productos</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus productos.</h2>

    <Loader/>
    <template>
      <div class="field has-text-right">
        <router-link to="/products/create">Agregar nuevo producto</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th>Nombre</th>
          <th>Descripción</th>
          <th style="width:200px;" class="has-text-right">Precio</th>
          <th style="width:150px;"></th>
        </thead>
        <tbody>
          

        </tbody>
      </table>
     

    </template>
  </div>
</template>

<script src="./ProductIndex.js"></script>