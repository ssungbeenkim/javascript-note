function execute() {
  console.log('1');
  setTimeout(() => {
    // asynchronous
    console.log('2');
  }, 2000);
  console.log('3');
}
execute();
