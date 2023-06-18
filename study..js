function a() {
  return () => {
    console.log('a');
  };
}

b = a();
b();
