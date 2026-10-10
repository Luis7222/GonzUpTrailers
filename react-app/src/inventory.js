// Existing public listings. Identity and images remain provisional until photo/VIN matching is confirmed.
export const inventory = [
  {id:'trailer1',name:'1999 CPS',price:21000,image:'trailer12.jpg',status:'rented'},
  {id:'trailer2',name:'2003 Lufkin',price:22500,image:'trailer13.jpg',status:'rented'},
  {id:'trailer3',name:'2003 Load King',price:23000,image:'trailer4.jpg',status:'rented'},
  {id:'trailer4',name:'2007 Construction',price:24500,image:'trailer6.jpg',status:'rented'},
  {id:'trailer5',name:'2007 Trailblazer',price:24199,image:'trailer7.jpg',status:'rented'},
  {id:'trailer6',name:'2008 CPS',price:25400,image:'trailer8.jpg',status:'rented'},
  {id:'trailer7',name:'2009 CTSI',price:26100,image:'trailer9.jpg',status:'rented'},
  {id:'trailer8',name:'1999 CPS',price:21100,image:'trailer10.jpg',status:'rented'},
  {id:'trailer9',name:'2001 CPS',price:21900,image:'trailer11.jpg',status:'rented'}
];
export const labels={available:'Available',rented:'Rented',in_service:'In Service'};
export const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
