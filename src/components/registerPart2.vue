<template>
    <div>
      <h1 style="font-size: 30px"><b>Registro de datos personales</b></h1>
      <div v-for="(campo, index) in campos" :key="index" :class="`${campo.class}`">
        <label><h2><b>{{ campo.label }}</b></h2></label>
        <input v-if="campo.type === 'text'" :id="campo.id" :type="campo.type" v-model="campo.value" :placeholder="campo.placeholder">
        <select v-else-if="campo.type === 'select'" :id="campo.id" v-model="campo.value">
          <option v-for="(option, optIndex) in campo.options" :key="optIndex" :value="option">{{ option }}</option>
        </select>
      </div>
      <button @click="validateAndProceed">Registrar proyecto</button>
    </div>
  </template>
  
  <script setup>
  import { ref, emit } from 'vue';
  
  // Datos reactivos específicos para este componente
  const campos = ref([
    { id: 'user', type: 'text', value: '', placeholder: 'Nombre de usuario', label: 'Nombre completo', class: 'user_input' },
    { id: 'phone', type: 'text', value: '', placeholder: 'Teléfono', label: 'Teléfono', class: 'project_input' },
    { id: 'personal_description', type: 'text', value: '', placeholder: 'Descripción personal', label: 'Descripción personal', class: 'personal_description_input' },
    { id: 'hobbies_description', type: 'text', value: '', placeholder: 'Descripción de hobbies', label: 'Descripción de mis hobbies', class: 'hobbies_description_input' },
    { id: 'not_accepted_things', type: 'text', value: '', placeholder: 'Cosas que no aceptaría', label: 'Cosas que no aceptaría de un roomie', class: 'not_accepted_things_input' },
    { id: 'ocupation', type: 'text', value: '', placeholder: 'Ocupación', label: 'Ocupación', class: 'ocupation' },
    { id: 'age', type: 'text', value: '', placeholder: 'Edad', label: 'Edad', class: 'age' },
    { id: 'gender', type: 'text', value: '', placeholder: 'Género', label: 'Género', class: 'gender' },
    { id: 'selectOption', type: 'select', value: '', label: '¿Qué busco?', class: 'categories_input', options: [
        'Tengo un espacio para rentar y busco roomie',
        'Estoy buscando un espacio para rentar y busco roomie'
      ]
    },
    { id: 'selectOptionSmoke', type: 'select', value: '', label: '¿Fumas?', class: 'categories_input', options: [
        'Sí',
        'No'
      ]
    },
    { id: 'selectOptionDrink', type: 'select', value: '', label: 'Tomas?', class: 'categories_input', options: [
        'Sí',
        'No'
      ]
    }
  ]);
  
  // Función para validar campos vacíos y proceder o mostrar alerta
  const validateAndProceed = () => {
    const emptyFields = [];
  
    for (let campo of campos.value) {
      if (!campo.value.trim()) {
        emptyFields.push(campo.label);
      }
    }
  
    if (emptyFields.length > 0) {
      showAlert(emptyFields);
    } else {
      emit('completedStep');
    }
  };
  
  // Función para mostrar alerta de campos vacíos
  const showAlert = (emptyFields) => {
    let message = 'Falta llenar los siguientes campos:\n';
    message += emptyFields.join(', ');
    alert(message);
  };
  </script>
  
  
  
  <style scoped>
  input, select {
    width: 300px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #02416d;
    border-radius: 4px;
    margin-top: 10px;
  }
  
  button {
    background-color: #02416d;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
    width: 200px;
  }
  
  button:hover {
    background-color: #01538a;
  }
  
  label {
    font-size: 18px;
    margin-top: 10px;
    display: block;
  }
  </style>
  