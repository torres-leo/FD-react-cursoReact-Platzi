# Aprendiendo React🤑 

React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, 
y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.
Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.

### Basado en Componentes

Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.
Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.

### Aprende una vez, escríbelo donde sea

En React no dejamos fuera al resto de tus herramientas tecnológicas, así que podrás desarrollar nuevas características sin necesidad de volver a escribir el código existente.
React puede también renderizar desde el servidor usando Node, así como potencializar aplicaciones móviles usando React Native.

## JSX
Es la extensión de archivos que se usa en react donde podemos hacer html dentro de js facilitando el uso sacando lo mejor de html css y js.

## Virual DOM
Es una copia del DOM real y lo que hace es compararlo, asi cuando existe algun cambio no se tiene que renderizar toda la pantalla si no solo lo que se cambio mejorando el desempeño de nuestra app, como lo comente antes esto es por que se compara el Virtual DOM con el DOM Real encontrando los cambios

## Ciclo de vida
Este concepto es ampliamente conocido en la programación, en este curso vamos a conocer cual es el ciclo de vida de los elementos que vamos a crear en react desde que nace, se combina hasta que muere

## Estado
Esto es fundamental, ya que podemos ver los estados y ver como es el flujo de la información entre componentes a travez de un imputs, botones, interacciones entre otros elementos.

## Eventos
Los componentes, pueden configurarse con eventos como onclick para responder antes ciertas interacciones con el usuario, tal como los haríamos en Html.

## React Hooks 
es otra manera de escribir los componentes con estado, sin usar clases. No se pretenden reemplazar, sin embargo, usar funciones para los componentes pueden facilitar el entendimiento de la aplicación.

# ¿Qué es router en React?
Debido a que React es de tipo SPA(single page application), no recarga la página cuando cambiamos de url. Sin embargo, router nos ayuda a crear otra página para poder navegar en nuestra aplicación. 

### Instalación react-router

```npm
npm install react-router-dom
```

**Versión instalada para este proyecto**: 6.2.2

### herramientas necesarias a importar(import)

```jsx
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
```

### ***Explicación***
**BrowserRoute**: sirve para implementar router en el navegador. Para ello encapsularemos todos nuestros componentes dentro del mismo.
**Ejemplo**: 
```jsx
<BrowserRouter>
	<Layout>
        <Login />
        <RecoveryPassword />
    </Layout>
</BrowserRouter>
```

**Routes**: regresa la primera ruta que coincida. En pocas palabras, si estamos en www.platzi.com/contacto , regresará el componente que coincida a este (es decir, el componente que contenga la lógica de contacto). En esta caso, estamos poniendo varios routes dentro de switch, ¿para qué? para que solamente traiga esa misma ruta, y no tenga que buscar más. Como si fuese un condicional switch de javascript efectivamente. Y por ello tenemos un route sin path, que será el valor por defecto.
**Ejemplo**:
```jsx
<BrowserRouter>
    <Layout>
        <Routes>
            <Route exact path="/login" element={<Login />} />
        </Routes>
    </Layout>
</BrowserRouter>
```

**"exact"**: es exacto. Buscar sobre una ruta de forma exacta. Versiones de react-router 6 ya no es necesaria colocarla.
**"path"**: la ruta por la cual va a vivir.
**"element"**: Asignar el componente al cual pertenece.

# Atomic Design

![Atomic Design](https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png)

Piensa en una aplicación. Identifica cada parte, navega por ella, cambia de sección. Te das cuenta? muchos componentes son muy parecidos. Conoce a atomic design, una metodología encargada en interfaces.

## Átomos

Ahora necesito que recuerdes las clases de química. Sabrás que todo en el universo está compuesto por átomos. Este es nuestro primer nivel de abstracción. Cuando diseñes un UI, mira los botones, textos, imágenes o entradas de texto. Son las partes más fundamentales y pequeñas que usamos.

![Periodic Table of the Elements](https://atomicdesign.bradfrost.com/images/content/html-periodic-table.png)

La imágen de arriba te ayudará a identificar que cosas pueden tomarse como átomos en tu próxima aplicación.

## Moléculas

Las moléculas son una unión de átomos. Todas estas moléculas, normalmente tienen una función específica para la cuál necesitan varios átomos. Por ejemplo, la glucosa C6H12O6, es la energía en carbohidratos del humanos. Ahora, pasemos al diseño. En interfaces, una parte como un comentario de twitter, una sección de youtube de ME GUSTA y NO ME GUSTA, o el menú en los videos de platzi para avanzar o retroceder en la clase, son todos moléculas. Estas estás compuestas de algunos componentes más pequeños (como por ejemplo, de botón y cuadro de texto). Este es nuestro segundo nivel. Crear moléculas es simple, y recuerda que deberán tener una función única en nuestra UI.

![Moleculas](https://atomicdesign.bradfrost.com/images/content/molecule-search-form.png)

## Organismos

Los organismos, ya son un nivel mucho más complejo. Los organismo están compuesto de muchas moléculas. Pero lo más interesante, es que tienen vida propia, y pueden interactuar en una manera muy amplia con otros organismos. Imagina una abeja con una flor, ambos colaboran de una u otra manera a que el otro esté bien. En nuestro diseño, imagina al header. El header está compuesto de muchos elementos, y tienen un impacto muy grande en la app. O incluso, de una sección como una tienda de ropa en la paǵina web. Seguramente te das cuenta, que estos tienen muchos artículos, y todos constan de una imaǵen, precio, y un ordenamiento. Puedes verlo así:

Átomo⇒ imágen, precio, descripción

Molécula ⇒ el cuadro que contiene a la imágen, al precio y a la descripción.

Organismo ⇒ todos los cuadros ordenados en forma de tabla.

El organismo si te das cuenta, puede usar moléculas del mismo tipo o diferentes. El punto clave, es que no trates de abarcar tanto, y que pertenecen a una sección claramente definida en nuestra app.

![Organismos](https://atomicdesign.bradfrost.com/images/content/organism-header.png)

## Templates

Los templates son prácticamente lo que vimos de Layouts. Es un poco más fácil de comprender. Es la plantilla en la cual siempre organizarás los organismos. Es decir, el esqueleto que indica donde irá por ejemplo, el Header, el footer, grid y sección de comentarios.

![Templates](https://atomicdesign.bradfrost.com/images/content/template.png)

## Pages

Finalmente tenemos a la constitución de nuestra app. Las pages son en sí, toda la página funcionando con contenido interactúando entre ellas.

![Pages](https://atomicdesign.bradfrost.com/images/content/page.png)

> Una recomendación. No pienses en forma secuencial el atomic design. Es decir, no pienses ⇒ primero hago los átomos, después hago las moléculas, tercero los organismos… Según el mismo autor de atomic design, dependerá mucho de tu aplicación y de las necesidades que hay que cubrir. Más bien, es una manera mental de interpretar la UI

> No atribuyas atomic design como algo único de React o del desarrollo web ⇒ es un método de desarrollo de UI que se puede usar en cualquier interfaz.

# Tipos de componentes en React: stateful vs. stateless

Este es un ejemplo para useState, podemos darle un valor inicial, el cual puede ser cambiado por un evento que se puede asignar a este mismo componente, o a otros componentes y hasta pasarlo por medio de un hijo para que éste cambie el inicial.

Para poder usar componentes "**stateful**" es necesario llamar useState desde React, la forma de importarlo y usarlo es la siguiente:
```jsx
import React, { useState } from 'react';

const Button = () => {
    const [name, setName] = useState('Hola Mundo'); 
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}
```
Los componentes "**stateless**" servirán para pasar un estilo visual o props, pero no tendrá otra función más que esa.

Este sería un componente sin estado, stateless:
```jsx
import React from 'react';

const Button = ({ text }) => <ButtonRed text={text}/>;
```

Es por eso que hay que tener presente que NO todos los componentes deben de tener estado y muchos de ellos sólo llevarán información que presentar directamente al HTML con CSS, pero sí serán parte de todo lo que se está construyendo.
Los componentes Stateful y Stateless, son los componentes más utilizados hoy en día.
También hay otro tipos de componentes, que están compuestos por clases.

Aquí, tendremos una clase, con el nombre que queramos, que extiende de React.Component

```jsx
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}
```

Aunque, si importamos React Component, desde un inicio, podemos simplemente escribirlo de esta forma:
```jsx
import React , { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}
```

Este tipo de componentes trabajan con constructores, aunque ya no son tan usados, pues han sido reemplazados por la propuesta de React Hooks.

```jsx
import React , { Component } from 'react';

class App extends Component {

    constructor() {
        super(props);
        this.sate = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}
```

Es importante conocer este tipo de componentes porque si en algún momento tenemos que dar mantenimiento a alguna página que fue construida hace unos años atrás, es muy posible que nos encontremos este tipo de componentes.

Los HOC, tienen una funcionalidad particular, pues reciben un componente, extienden su funcionalidad con lo que esté dentro del componente y retornan un componente compuesto. Así podemos tener funcionalidades muy específicas con las que podemos trabajar según nuestras necesidades.

Esta sería la sintaxis:
```jsx
import React , { Component } from 'react';

function ComponentWrapper(WrapperComponent) {
    class Wrapper extends Component {
        render () {
            return <WrapperComponent {...this.props} />;
        }
    }

    return Wrapper;
}
```

Más adelante aprenderemos más sobre React Context y cómo usarlo.

## useEffect 
es una manera de que nuestro componente de React, puede recibir nueva info, re-renderizar o cambiar su contenido, cuando una función se haya completado. Es decir, podemos controlar el momento en el cual nuestro componente tome un cierto comportamiento. Por ejemplo, en situaciones como funciones asíncronas ⇒ setTimeout o asyn y await, fetch requests o manipulaciones del DOM. Veamos un ejemplo de como usar useEffect.

**Pre-configuración**:
> Instalar axios para realizar peticiones get, también instalar el plugin de babel para manejar el asincronismo

```npm
npm install axios
npm install @babel/plugin-transform-runtime
```

Editemos rápidamente "*.babelrc*":
```babel
{
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react"
	],
	"plugins": [
		"@babel/plugin-transform-runtime"
	]
}
```

Ahora si veamos como funciona.
```jsx
// ProductList.jsx
import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}
```
En el inicio estamos importando axios para las peticiones, y creando una constante API que será la necesaria para traer información de los productos

Analicemos el componente productList. Al inicio creamos la estructura inicial de estado, en la cual guardaremos los artículos que traeremos de nuestra API. Ahora, como indicamos, useEffect es muy útil para peticiones HTTP. Para ello, creamos la función anónima que usa useEffect. Por dentro creamos la función que usara async. Dentro creamos una constante llamada response a la cual creamos la petición y guadamos el resultado de la API. A continuación, usamos setProducts para poder guardar la información nueva en products, por eso por dentro le pasamos response.data. Lo más destacable viene ahora, en el momento que pasamos un segundo argumento a useEffect.

### Maneras de usar useEffect
- Array Vacío ⇒ ejecuta el callback solamente una vez, después de que el componente sea cargado en el DOM. Es decir, solamente cuando nuestro componente este cargado en el DOM, ejecutará la función por dentro SOLO UNA VEZ y nunca más

```jsx
const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, [])
}
```

- Sin argumentos ⇒ cuando usemos useEffect, pero sin segundo argumento, este ejecutará dicho callback cada vez que se re-rendirece en el DOM. Es decir, cada vez que cambie cualquier valor del componente, este callback siempre se ejecuta
```jsx
const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	},)
}
```

- Array con datos ⇒ este tipo se ejecuta solamente cuando un valor de prop o state de nuestro componente cambie. Es decir, imaginemos que existe un contador interno de clicks. Cada vez que el contador indique explicita mente que un valor del componente cambió, el callback de useEffect siempre se ejecutará.
```jsx
const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, [props, state])
}
```

Tienen relación a la manera de anterior de componentes con clase

- Usar la manera de array con datos o sin datos son equivalentes a componentDidUpdate o componentDidMount. Así como indica sus nombres.
    - Si el componente se actualizó, este ejecuta un callback el cual tiene cierta función. Esta manera es igual a usar useEffect con un array con datos. Es decir, ¿hay nueva info? ⇒ realiza esto cada vez que la info nueva se actualice
    - Si el componente se cargó en el DOM, un callback será ejecutado y nunca más. Esta manera es igual a usar useEffect con un array sin datos. Es decir, ¿ya está cargado? ⇒ necesito que hagas esto y después te puedes quedar dormido.

## Características y diferencias entre useRef y useState

**useRef** es un hook utilizado para obtener una referencia a los datos de un objeto con información mutable. Es decir, es como una manera de siempre poder obtener los datos mas recientes mediante referencia de algún objeto de html. En este caso referenciamos a los valores recientes de un formulario. Dos características importantes de useRef es que los datos son persistentes en caso de que se re-renderice el componente. Así como también, actualizar los datos de esta referencia no causan el re-render. Cabe recalcar la diferencia con useState, que la actualización de datos es síncrona, ya además como hemos mencionado, no se re-renderiza.

### useRef

1. Genera una referencia al elemento y podremos acceder a los valores por medio de ‘current’, y por este medio obtener lo que estamos typeando según sea el caso y poderlo transmitir a donde lo necesitemos.
2. El elemento que tendrá la referencia debe tener atributo: ref={NOMBRE_USEREF}
3. Podemos acceder a toda la data de la siguiente manera: new FormData(NOMBRE_USEREF.current);
4. El elemento también debe tener un atributo: name=“NOMBRE” y podremos acceder a la data que trae en current de la siguiente manera: formData.get(‘NOMBRE’);