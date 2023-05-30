export function calculateTotal(cart) {
  let total = cart && cart.reduce((a, c) => 
  a + c.price, 0)
  total = Number(total.toFixed(2))
  return total
}