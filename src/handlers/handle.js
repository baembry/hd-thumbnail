const addToCart = function(id, event) {
  console.log('adding to cart', id);
  event.stopPropagation();
  window.dispatchEvent(
    new CustomEvent('addToCart', {
      detail: {
        id,
      },
    })
  );
};
const updatePath = id => {
  console.log('dispatching updatePath', id);
  window.dispatchEvent(new CustomEvent('updatePath', { detail: { id } }));
};

export default { addToCart, updatePath };
