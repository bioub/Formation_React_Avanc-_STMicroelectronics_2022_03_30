# Exercices

## Render Props

Dans le composant Select créer 2 nouvelles props :
- renderValue
- renderItem

Ces 2 props seront des fonctions qui recevront en entrée une valeur de type string et qui retourneront un élément JSX (`JSX.Element`)

Ces 2 props doivent être optionnelles (utiliser `?`)

Si les props ne sont pas passées, continuer de faire le rendu actuel (`<div className={styles.value}>{selected}</div>` pour value, `<div key={item} onClick={() => onSelected(item)}>{item}</div>` pour les items)

Si les props sont passées, utiliser les fonctions pour faire le rendu dans `Select`, vous pourriez par exemple décider depuis `App` que `value` et `item` doivent s'afficher sous forme
de balise `<b>` (dans les 2 cas conserver les div existantes pour ne pas perdre `className`, `key` et `onClick`, appeler `renderValue` et `renderItem`  à l'intérieur de la balise `<div>`)

Faire ensuite évoluer `renderItem` pour que l'item ne soit en gras que s'il correspond à la valeur sélectionnée.

Bonus : faire évoluer le code de renderItem vers un composant de telle sorte à ce que dans `Select` on puisse utiliser : `<Item key={item} onClick={() => onSelected(item)}>{item}</Item>`

## Higher Order Component

Créer un Higher Order Component component nommé `color`

Ce Higher Order Component reçoit en paramètres le composant à encapsuler et une couleur au format CSS (ex : `blue`, `#0000FF`, `rgb(0, 0, 255)`)

Dans le render du Higher Order Component, créer une balise div comme ceci :

```
return (
  <div style={{color: color}}>
    <WrappedComponent />
  </div>
);
```

(`WrappedComponent` étant le premier paramètre du HOC)

Penser à passer les props du HOC à `WrappedComponent`

Générer ensuite un composant `BlueSelect` à partir du HOC `color` et l'utiliser dans 
`App`

Bonus : faire évoluer le code pour que la couleur ne soit plus un paramètre du HOC mais qu'elle vienne des props.
