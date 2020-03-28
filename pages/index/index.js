Page({
  data: {
    active: 0
  },
  onChange(event) {
    console.log(event.detail);
    
    this.setData({ active: event.detail });
  }
});