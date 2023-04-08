{
  //230314
  const arr = [11, 2, 3];
  console.log(arr[5]); // undefined 출력됨;
}

{
  switch (direction) {
    case 'up':
      position.y++;
      break;
    case 'down':
      position.y--;
      break;
    case 'left':
      position.x--;
      break;
    case 'right':
      position.x++;
      break;
    default:
      throw new Error(`unknown direction: ${direction}`); // default: 를 꼭 해주자!
  }
}
