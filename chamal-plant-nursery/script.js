/* Chamal Plant Nursery — vanilla JavaScript demonstration.
   Product catalogue and shopping state are stored in this browser only. */
(() => {
  "use strict";
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const WA = "94702799202";
  const MAPS = "https://www.google.com/maps/search/?api=1&query=Chamal+Plant+Nursery+Pvt+Ltd+Sri+Lanka";
  const money = n => "Rs. " + Number(n || 0).toLocaleString("en-LK", {maximumFractionDigits:2});
  const safeImage = "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=75";
  const categorySeed = [
    ["Fruit Plants & Trees","Fruit Plants සහ ගස්","https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=700&q=80"],
    ["Flowering Plants","මල් පැළ","https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"],
    ["Ornamental Plants","අලංකාර පැළ","https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80"],
    ["Indoor Plants","ගෘහස්ථ පැළ","https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80"],
    ["Outdoor Plants","එළිමහන් පැළ","https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80"],
    ["Medicinal Plants","ඖෂධීය පැළ","https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"],
    ["Vegetable Seedlings","එළවළු පැළ","https://images.unsplash.com/photo-1499529112087-3cb3b73?auto=format&fit=crop&w=700&q=80"],
    ["Seeds & Supplies","බීජ සහ උපාංග","https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80"],
    ["Pots & Planters","මල් පෝච්චි","https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80"],
    ["Soil & Fertilizers","පස සහ පොහොර","https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=80"]
  ];
  const demoProducts = [
    {id:"CPN-001",name:"Mango Plant",nameSi:"අඹ පැළය",scientific:"Mangifera indica",category:"Fruit Plants & Trees",price:1200,salePrice:990,stock:12,image:"https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=700&q=80",images:[],description:"A demonstration listing for a mango plant.",fullDescription:"Sample product record only. Confirm plant variety, size, current price and availability with the nursery.",keywords:"mango fruit tree අඹ",size:"Sample size — confirm",sunlight:"Depends on variety and growing stage",watering:"Keep soil appropriately moist; avoid waterlogging",featured:true,newArrival:true,published:true,createdAt:"2026-10-20"},
    {id:"CPN-002",name:"Guava Plant",nameSi:"පේර පැළය",scientific:"Psidium guajava",category:"Fruit Plants & Trees",price:850,salePrice:null,stock:8,image:"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=700&q=80",images:[],description:"A sample fruit-plant catalogue entry.",fullDescription:"Demonstration data. Please ask the nursery about variety, size and availability.",keywords:"guava fruit පේර",size:"Confirm with nursery",sunlight:"Bright light generally preferred",watering:"Adjust to soil and weather",featured:true,newArrival:false,published:true,createdAt:"2026-10-18"},
    {id:"CPN-003",name:"Lime Plant",nameSi:"දෙහි පැළය",scientific:"Citrus aurantiifolia",category:"Fruit Plants & Trees",price:750,salePrice:null,stock:14,image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80",images:[],description:"A demonstration listing for a lime plant.",fullDescription:"Sample details only. Confirm variety and plant size before purchase.",keywords:"lime citrus දෙහි",size:"Confirm with nursery",sunlight:"Often benefits from good sunlight",watering:"Avoid waterlogging",featured:false,newArrival:true,published:true,createdAt:"2026-10-21"},
    {id:"CPN-004",name:"Rose Plant",nameSi:"රෝස පැළය",scientific:"Rosa",category:"Flowering Plants",price:950,salePrice:800,stock:6,image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80",images:[],description:"A colourful flowering-plant sample.",fullDescription:"Demonstration listing. Flower colour and variety are not guaranteed by this sample record.",keywords:"rose flower රෝස",size:"Confirm with nursery",sunlight:"Varies by variety",watering:"Water around the soil as needed",featured:true,newArrival:false,published:true,createdAt:"2026-10-15"},
    {id:"CPN-005",name:"Orchid Plant",nameSi:"ඕකිඩ් පැළය",scientific:"Orchidaceae",category:"Flowering Plants",price:1800,salePrice:null,stock:4,image:"https://images.unsplash.com/photo-1566907225472-9e7c8a5f9a34?auto=format&fit=crop&w=700&q=80",images:[],description:"A sample orchid listing for catalogue testing.",fullDescription:"Orchid care depends on the type. Confirm the exact plant and care needs with the nursery.",keywords:"orchid flower ඕකිඩ්",size:"Confirm with nursery",sunlight:"Often bright indirect light",watering:"Depends on orchid type and medium",featured:false,newArrival:true,published:true,createdAt:"2026-10-22"},
    {id:"CPN-006",name:"Aloe Vera",nameSi:"කෝමාරිකා",scientific:"Aloe vera",category:"Medicinal Plants",price:500,salePrice:null,stock:20,image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80",images:[],description:"A sample aloe plant catalogue entry.",fullDescription:"Demonstration data. Not medical advice; confirm plant identity and use appropriate care.",keywords:"aloe vera medicinal කෝමාරිකා",size:"Small plant — sample",sunlight:"Bright light",watering:"Allow growing medium to dry between watering",featured:true,newArrival:false,published:true,createdAt:"2026-10-17"},
    {id:"CPN-007",name:"Hibiscus Plant",nameSi:"වද මල් පැළය",scientific:"Hibiscus rosa-sinensis",category:"Flowering Plants",price:700,salePrice:null,stock:0,image:"https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=700&q=80",images:[],description:"A demonstration listing; marked out of stock.",fullDescription:"Sample stock is set to zero to demonstrate availability states.",keywords:"hibiscus flower වද",size:"Confirm with nursery",sunlight:"Bright light generally preferred",watering:"Keep consistent with weather and soil",featured:false,newArrival:false,published:true,createdAt:"2026-10-12"},
    {id:"CPN-008",name:"Vegetable Seedlings",nameSi:"එළවළු පැළ",scientific:"Various",category:"Vegetable Seedlings",price:150,salePrice:null,stock:35,image:"https://images.unsplash.com/photo-1499529112087-3cb3b73?auto=format&fit=crop&w=700&q=80",images:[],description:"A sample listing for vegetable seedlings.",fullDescription:"Seedling types, quantities and prices are illustrative. Contact the nursery to confirm current options.",keywords:"vegetable seedlings tomato chilli එළවළු",size:"Seedling tray — sample",sunlight:"Depends on crop",watering:"Keep seedlings evenly moist",featured:false,newArrival:true,published:true,createdAt:"2026-10-23"},
    {id:"CPN-009",name:"Compost Mix",nameSi:"කොම්පෝස්ට් මිශ්‍රණය",scientific:"—",category:"Soil & Fertilizers",price:600,salePrice:520,stock:18,image:"https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=80",images:[],description:"An illustrative soil and compost product.",fullDescription:"Sample price and details only. Check ingredients, quantity and label instructions before use.",keywords:"compost soil fertilizer පොහොර කොම්පෝස්ට්",size:"Pack size — confirm",sunlight:"Not applicable",watering:"Follow plant and product instructions",featured:true,newArrival:false,published:true,createdAt:"2026-10-16"},
    {id:"CPN-010",name:"Indoor Foliage Plant",nameSi:"ගෘහස්ථ කොළ පැළය",scientific:"Various",category:"Indoor Plants",price:1100,salePrice:null,stock:9,image:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80",images:[],description:"A sample leafy indoor plant listing.",fullDescription:"The plant shown is illustrative. Confirm the exact species and care instructions with the nursery.",keywords:"indoor foliage houseplant ගෘහස්ථ",size:"Confirm with nursery",sunlight:"Bright indirect light may suit many species",watering:"Depends on exact species",featured:false,newArrival:true,published:true,createdAt:"2026-10-22"}
  ];
  const translations = {
    en:{announcement:"A little more green makes every day better.",shopNow:"Explore plants →",navHome:"Home",navShop:"Shop plants",navCategories:"Categories",navAbout:"Our nursery",navCare:"Plant care",navContact:"Contact",heroEyebrow:"YOUR GARDEN, YOUR LITTLE PARADISE",heroTitle:"Grow your dream garden.",heroCopy:"Discover beautiful plants and gardening essentials for your home, garden, and growing projects.",heroNote:"A greener space starts with one plant.",explorePlants:"Explore our plants",categoryTitle:"Shop by category",viewAll:"View all plants ↗",shopTitle:"Find your next favourite",shopSub:"Explore our editable demonstration catalogue.",aboutTitle:"Good things grow with a little care."},
    si:{announcement:"ඔබේ සෑම දවසකටම තවත් කොළ පැහැයක් එක් කරමු.",shopNow:"පැළ බලන්න →",navHome:"මුල් පිටුව",navShop:"පැළ මිලදී ගන්න",navCategories:"වර්ග",navAbout:"අපේ පැළ තවාන",navCare:"පැළ රැකවරණය",navContact:"අමතන්න",heroEyebrow:"ඔබේ ගෙවත්ත, ඔබේ පුංචි පාරාදීසය",heroTitle:"ඔබේ සිහින ගෙවත්ත වවන්න.",heroCopy:"ඔබේ නිවසට, ගෙවත්තට සහ වගා කටයුතු සඳහා සුන්දර පැළ සහ ගෙවතු උපකරණ සොයාගන්න.",heroNote:"හරිත අවකාශයක් ඇරඹෙන්නේ එක් පැළයකින්.",explorePlants:"අපේ පැළ බලන්න",categoryTitle:"වර්ග අනුව තෝරන්න",viewAll:"සියලු පැළ බලන්න ↗",shopTitle:"ඔබේ ඊළඟ ප්‍රියතම පැළය",shopSub:"වෙනස් කළ හැකි නියැදි නිෂ්පාදන ලැයිස්තුව.",aboutTitle:"පුංචි රැකවරණයකින් දේවල් හොඳින් වැඩේ."}
  };
  const getStore=(key, fallback)=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch{return fallback}};
  const setStore=(key,val)=>{try{localStorage.setItem(key,JSON.stringify(val))}catch{toast("Browser storage is unavailable. Changes may not persist.")}};
  let products=getStore("cpn_products",demoProducts);
  let categories=getStore("cpn_categories",categorySeed.map(c=>({name:c[0],nameSi:c[1],image:c[2]})));
  let cart=getStore("cpn_cart",[]);
  let wishlist=getStore("cpn_wishlist",[]);
  let lang=getStore("cpn_lang","en");
  let visibleLimit=8, selectedProduct=null, toastTimer;
  const normalize=s=>String(s??"").normalize("NFKC").toLocaleLowerCase().trim().replace(/\s+/g," ");
  const published=()=>products.filter(p=>p.published!==false&&p.status!=="archived");
  const productPrice=p=>Number(p.salePrice!==null&&p.salePrice!==""&&Number(p.salePrice)>=0&&Number(p.salePrice)<Number(p.price)?p.salePrice:p.price)||0;
  const discount=p=>p.price>0&&productPrice(p)<p.price?Math.round((p.price-productPrice(p))/p.price*100):0;
  const img=p=>validImage(p.image)?p.image:safeImage;
  function validImage(url){try{const u=new URL(url,location.href);return ["http:","https:","file:"].includes(u.protocol)}catch{return false}}
  function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
  function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}
  function saveProducts(){setStore("cpn_products",products)}
  function categoryName(c){const obj=categories.find(x=>x.name===c);return lang==="si"&&obj?.nameSi?obj.nameSi:c}
  function renderCategories(){
    $("#categoryGrid").innerHTML=categories.slice(0,12).map(c=>`<button class="category-card" data-category="${escapeHtml(c.name)}"><img loading="lazy" src="${escapeHtml(validImage(c.image)?c.image:safeImage)}" alt="${escapeHtml(c.name)}"><span>${escapeHtml(lang==="si"&&c.nameSi?c.nameSi:c.name)}<small>EXPLORE CATEGORY ↗</small></span></button>`).join("");
    const options=categories.map(c=>`<option value="${escapeHtml(c.name)}">${escapeHtml(lang==="si"&&c.nameSi?c.nameSi:c.name)}</option>`).join("");
    const current=$("#categoryFilter").value;
    $("#categoryFilter").innerHTML='<option value="">All categories</option>'+options;
    if(categories.some(c=>c.name===current))$("#categoryFilter").value=current;
    $("#adminCategory").innerHTML=options;
  }
  function filteredProducts(){
    let list=published();
    const q=normalize($("#searchInput").value), cat=$("#categoryFilter").value;
    if(q)list=list.filter(p=>normalize([p.name,p.nameSi,p.scientific,p.description,p.fullDescription,p.category,(p.keywords||"")].join(" ")).includes(q));
    if(cat)list=list.filter(p=>p.category===cat);
    if($("#saleOnly").checked)list=list.filter(p=>discount(p)>0);
    const sort=$("#sortSelect").value;
    if(sort==="price-asc")list.sort((a,b)=>productPrice(a)-productPrice(b));
    else if(sort==="price-desc")list.sort((a,b)=>productPrice(b)-productPrice(a));
    else if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
    else if(sort==="newest")list.sort((a,b)=>String(b.createdAt||"").localeCompare(String(a.createdAt||"")));
    else list.sort((a,b)=>Number(b.featured)-Number(a.featured));
    return list;
  }
  function productCard(p){
    const d=discount(p), out=Number(p.stock)<=0;
    return `<article class="product-card"><div class="product-image-wrap" data-detail="${escapeHtml(p.id)}" tabindex="0" role="button" aria-label="View ${escapeHtml(p.name)}"><img loading="lazy" src="${escapeHtml(img(p))}" alt="${escapeHtml(p.name)}" onerror="this.onerror=null;this.src='${safeImage}'">${d?`<span class="product-badge sale">-${d}%</span>`:p.newArrival?'<span class="product-badge">NEW ARRIVAL</span>':""}<button class="wish-button ${wishlist.includes(p.id)?"active":""}" data-wish="${escapeHtml(p.id)}" aria-label="Add ${escapeHtml(p.name)} to wishlist">${wishlist.includes(p.id)?"♥":"♡"}</button></div><div class="product-info"><span class="product-category">${escapeHtml(categoryName(p.category))}</span><h3 data-detail="${escapeHtml(p.id)}" tabindex="0">${escapeHtml(p.name)}</h3>${p.nameSi?`<p class="si-name">${escapeHtml(p.nameSi)}</p>`:""}<p class="product-desc">${escapeHtml(p.description)}</p><div class="price-row"><span class="price">${money(productPrice(p))}</span>${d?`<span class="old-price">${money(p.price)}</span>`:""}</div><div class="stock ${out?"out":""}">${out?"Currently unavailable":`${Number(p.stock)} available (sample stock)`}</div><div class="product-actions"><button data-add="${escapeHtml(p.id)}" ${out?"disabled":""}>${out?"Out of stock":"Add to cart +"}</button><button data-detail="${escapeHtml(p.id)}">Details ↗</button></div></div></article>`;
  }
  function renderProducts(){
    const all=filteredProducts(), shown=all.slice(0,visibleLimit);
    $("#productGrid").innerHTML=shown.map(productCard).join("");
    $("#resultCount").textContent=`Showing ${shown.length} of ${all.length} demonstration products`;
    $("#emptyState").hidden=all.length>0;$("#loadMore").hidden=shown.length>=all.length;
    $("#clearSearch").hidden=!$("#searchInput").value;
  }
  function renderSuggestions(){
    const q=normalize($("#searchInput").value), el=$("#suggestions");
    if(!q){el.classList.remove("open");el.innerHTML="";return}
    const matches=published().filter(p=>normalize([p.name,p.nameSi,p.scientific,p.description,p.category,p.keywords].join(" ")).includes(q)).slice(0,6);
    el.innerHTML=matches.length?matches.map(p=>`<button class="suggestion-item" role="option" data-detail="${escapeHtml(p.id)}"><img src="${escapeHtml(img(p))}" alt=""><span><strong>${escapeHtml(p.name)}${p.nameSi?" · "+escapeHtml(p.nameSi):""}</strong><small>${money(productPrice(p))} · ${escapeHtml(categoryName(p.category))}</small></span></button>`).join(""):'<div class="suggestion-item">No matching plants found</div>';
    el.classList.add("open");
  }
  function renderCounts(){$("#cartCount").textContent=cart.reduce((n,x)=>n+Number(x.qty||0),0);$("#wishCount").textContent=wishlist.length;$("#drawerCartCount").textContent=`(${cart.reduce((n,x)=>n+Number(x.qty||0),0)})`}
  function addToCart(id,qty=1){
    const p=products.find(x=>x.id===id);if(!p||p.published===false||Number(p.stock)<=0){toast("This product is currently unavailable.");return}
    const line=cart.find(x=>x.id===id), next=(line?.qty||0)+qty;
    if(next>Number(p.stock)){toast("Quantity exceeds the sample stock available.");return}
    if(line)line.qty=next;else cart.push({id,qty});
    setStore("cpn_cart",cart);renderCounts();renderCart();toast(`${p.name} added to cart.`);
  }
  function renderCart(){
    const el=$("#cartItems");
    const lines=cart.map(line=>({line,p:products.find(p=>p.id===line.id)})).filter(x=>x.p);
    if(!lines.length){el.innerHTML='<div class="drawer-empty">Your cart is ready for a little green.<br><br><a class="text-link" href="#shop" data-close>Explore plants ↗</a></div>';$("#cartFooter").innerHTML="";return}
    el.innerHTML=lines.map(({line,p})=>`<div class="drawer-item"><img src="${escapeHtml(img(p))}" alt="${escapeHtml(p.name)}"><div><strong>${escapeHtml(p.name)}</strong><small>${money(productPrice(p))} each</small><div class="qty-controls"><button data-qty="${escapeHtml(p.id)}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${line.qty}</span><button data-qty="${escapeHtml(p.id)}" data-delta="1" aria-label="Increase quantity">+</button></div><button data-remove="${escapeHtml(p.id)}">Remove</button></div><strong>${money(productPrice(p)*line.qty)}</strong></div>`).join("");
    const total=lines.reduce((n,{line,p})=>n+productPrice(p)*line.qty,0);
    $("#cartFooter").innerHTML=`<div class="subtotal-line"><span>Estimated subtotal</span><span>${money(total)}</span></div><p class="small-note">Demonstration prices only. Delivery fees and final availability must be confirmed.</p><button class="button button-dark" id="checkoutOpen">Prepare WhatsApp inquiry ↗</button><button class="button button-soft" id="clearCart">Clear cart</button>`;
  }
  function renderWishlist(){
    const el=$("#wishlistItems"), list=wishlist.map(id=>products.find(p=>p.id===id)).filter(Boolean);
    el.innerHTML=list.length?list.map(p=>`<div class="drawer-item"><img src="${escapeHtml(img(p))}" alt="${escapeHtml(p.name)}"><div><strong>${escapeHtml(p.name)}</strong><small>${money(productPrice(p))}</small><button data-add="${escapeHtml(p.id)}">Move to cart +</button><button data-unwish="${escapeHtml(p.id)}">Remove</button></div></div>`).join(""):'<div class="drawer-empty">No saved plants yet. Tap ♡ on a plant to save it.</div>';
  }
  function toggleWish(id){wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];setStore("cpn_wishlist",wishlist);renderCounts();renderProducts();renderWishlist();toast(wishlist.includes(id)?"Saved to wishlist.":"Removed from wishlist.")}
  function showProduct(id){
    const p=products.find(x=>x.id===id);if(!p)return;selectedProduct=p;
    const d=discount(p), out=Number(p.stock)<=0;
    $("#productDetailContent").innerHTML=`<div class="detail-layout"><img src="${escapeHtml(img(p))}" alt="${escapeHtml(p.name)}" onerror="this.onerror=null;this.src='${safeImage}'"><div><span class="product-category">${escapeHtml(categoryName(p.category))}</span><h2>${escapeHtml(p.name)}</h2>${p.nameSi?`<p>${escapeHtml(p.nameSi)}</p>`:""}${p.scientific?`<p><em>${escapeHtml(p.scientific)}</em></p>`:""}<div class="price-row"><span class="price">${money(productPrice(p))}</span>${d?`<span class="old-price">${money(p.price)}</span><span class="product-badge sale">-${d}%</span>`:""}</div><p>${escapeHtml(p.fullDescription||p.description)}</p><p><strong>Availability:</strong> ${out?"Currently unavailable":`${p.stock} in sample stock`}</p>${p.size?`<p><strong>Size:</strong> ${escapeHtml(p.size)}</p>`:""}${p.sunlight?`<p><strong>Sunlight:</strong> ${escapeHtml(p.sunlight)}</p>`:""}${p.watering?`<p><strong>Watering:</strong> ${escapeHtml(p.watering)}</p>`:""}<label>Quantity<input id="detailQty" type="number" min="1" max="${Math.max(1,Number(p.stock)||1)}" value="1" ${out?"disabled":""}></label><button class="button button-dark" id="detailAdd" ${out?"disabled":""}>Add to cart +</button><a class="button button-soft" href="https://wa.me/${WA}?text=${encodeURIComponent("Hello Chamal Agro, I would like to ask about "+p.name+" (ID: "+p.id+").")}" target="_blank" rel="noopener">Ask on WhatsApp ↗</a></div></div>`;
    $("#productDialog").showModal();
  }
  function openDrawer(id){closeDrawers();$("#overlay").hidden=false;$("#"+id).classList.add("open");$("#"+id).setAttribute("aria-hidden","false");document.body.classList.add("locked")}
  function closeDrawers(){$$(".drawer").forEach(d=>{d.classList.remove("open");d.setAttribute("aria-hidden","true")});$("#overlay").hidden=true;document.body.classList.remove("locked")}
  function openCheckout(){if(!cart.length){toast("Add a plant to your cart first.");return}const total=cart.reduce((n,l)=>{const p=products.find(x=>x.id===l.id);return n+(p?productPrice(p)*l.qty:0)},0);$("#orderEstimate").textContent=`Estimated subtotal: ${money(total)} · delivery not included`;$("#checkoutDialog").showModal()}
  function validProduct(p){
    const price=Number(p.price), sale=p.salePrice===""||p.salePrice===null||p.salePrice===undefined?null:Number(p.salePrice), stock=Number(p.stock);
    if(!p.name?.trim()||!p.category||!p.description?.trim())throw Error("Name, category and short description are required.");
    if(!Number.isFinite(price)||price<0)throw Error("Enter a valid non-negative regular price.");
    if(sale!==null&&(!Number.isFinite(sale)||sale<0||sale>=price))throw Error("Sale price must be non-negative and lower than regular price.");
    if(!Number.isInteger(stock)||stock<0)throw Error("Stock must be a whole number of zero or more.");
    if(p.image&&!validImage(p.image))throw Error("Image must be a valid http, https, or local file URL.");
    return {...p,price,salePrice:sale,stock,featured:!!p.featured,newArrival:!!p.newArrival,published:!!p.published,createdAt:p.createdAt||new Date().toISOString().slice(0,10)};
  }
  function renderAdminList(){
    $("#adminProductList").innerHTML=products.map(p=>`<div class="admin-row"><img src="${escapeHtml(img(p))}" alt=""><div class="admin-product-meta"><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.id)} · ${money(productPrice(p))} · ${p.published===false?"Unpublished":"Published"} · stock ${Number(p.stock)||0}</small></div><button data-edit="${escapeHtml(p.id)}">Edit</button><button data-publish="${escapeHtml(p.id)}">${p.published===false?"Publish":"Unpublish"}</button><button data-delete="${escapeHtml(p.id)}">Delete</button></div>`).join("");
  }
  function resetProductForm(){const f=$("#productForm");f.reset();f.hidden=true;f.elements.id.value="";f.elements.published.checked=true;$("#adminFormMessage").textContent=""}
  function editProduct(id){
    const f=$("#productForm"), p=products.find(x=>x.id===id);if(!p)return;
    f.hidden=false;f.elements.id.value=p.id;f.elements.name.value=p.name||"";f.elements.nameSi.value=p.nameSi||"";f.elements.scientific.value=p.scientific||"";f.elements.category.value=p.category||categories[0]?.name||"";f.elements.price.value=p.price??0;f.elements.salePrice.value=p.salePrice??"";f.elements.stock.value=p.stock??0;f.elements.image.value=p.image||"";f.elements.images.value=(p.images||[]).join("\n");f.elements.description.value=p.description||"";f.elements.fullDescription.value=p.fullDescription||"";f.elements.keywords.value=p.keywords||"";f.elements.size.value=p.size||"";f.elements.sunlight.value=p.sunlight||"";f.elements.watering.value=p.watering||"";f.elements.featured.checked=!!p.featured;f.elements.newArrival.checked=!!p.newArrival;f.elements.published.checked=p.published!==false;$("#productFormTitle").textContent="Edit product";f.scrollIntoView({behavior:"smooth",block:"start"});
  }
  function setLanguage(){
    document.documentElement.lang=lang;$("#langToggle").textContent=lang==="en"?"සිංහල":"English";
    $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.textContent=translations[lang][key]});
    $("#searchInput").placeholder=lang==="si"?"පැළ, වර්ග සොයන්න…":"Search plants, categories…";
    renderCategories();renderProducts();
  }

  document.addEventListener("click",e=>{
    const detail=e.target.closest("[data-detail]");if(detail){e.preventDefault();showProduct(detail.dataset.detail);$("#suggestions").classList.remove("open");return}
    const add=e.target.closest("[data-add]");if(add){addToCart(add.dataset.add);return}
    const wish=e.target.closest("[data-wish]");if(wish){e.stopPropagation();toggleWish(wish.dataset.wish);return}
    const unwish=e.target.closest("[data-unwish]");if(unwish){wishlist=wishlist.filter(id=>id!==unwish.dataset.unwish);setStore("cpn_wishlist",wishlist);renderCounts();renderWishlist();renderProducts();return}
    const qty=e.target.closest("[data-qty]");if(qty){const line=cart.find(x=>x.id===qty.dataset.qty),p=products.find(x=>x.id===qty.dataset.qty);if(!line||!p)return;const next=line.qty+Number(qty.dataset.delta);if(next<1)cart=cart.filter(x=>x.id!==line.id);else if(next>Number(p.stock))toast("Quantity exceeds available sample stock.");else line.qty=next;setStore("cpn_cart",cart);renderCounts();renderCart();return}
    const remove=e.target.closest("[data-remove]");if(remove){cart=cart.filter(x=>x.id!==remove.dataset.remove);setStore("cpn_cart",cart);renderCounts();renderCart();return}
    const cat=e.target.closest("[data-category]");if(cat){$("#categoryFilter").value=cat.dataset.category;visibleLimit=8;renderProducts();$("#shop").scrollIntoView({behavior:"smooth"});return}
    const edit=e.target.closest("[data-edit]");if(edit){editProduct(edit.dataset.edit);return}
    const pub=e.target.closest("[data-publish]");if(pub){const p=products.find(x=>x.id===pub.dataset.publish);if(p){p.published=p.published===false;saveProducts();renderAdminList();renderProducts();toast(p.published?"Product published.":"Product unpublished.")}return}
    const del=e.target.closest("[data-delete]");if(del){if(confirm("Delete this product from this browser's catalogue?")){products=products.filter(x=>x.id!==del.dataset.delete);cart=cart.filter(x=>x.id!==del.dataset.delete);wishlist=wishlist.filter(x=>x!==del.dataset.delete);saveProducts();setStore("cpn_cart",cart);setStore("cpn_wishlist",wishlist);renderAdminList();renderProducts();renderCounts();renderCart();renderWishlist();toast("Product deleted.")}return}
    if(e.target.closest("[data-close]")){closeDrawers();return}
    if(e.target.id==="checkoutOpen"){openCheckout();return}
    if(e.target.id==="clearCart"){if(confirm("Clear all items from your cart?")){cart=[];setStore("cpn_cart",cart);renderCounts();renderCart()}return}
    if(e.target.id==="detailAdd"&&selectedProduct){const qty=Math.max(1,Math.floor(Number($("#detailQty").value)||1));addToCart(selectedProduct.id,qty);$("#productDialog").close();return}
    if(e.target.id==="overlay"){closeDrawers();return}
  });
  document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-detail][tabindex]")){e.preventDefault();showProduct(e.target.dataset.detail)}if(e.key==="Escape")$("#suggestions").classList.remove("open")});
  $("#searchInput").addEventListener("input",()=>{visibleLimit=8;renderSuggestions();renderProducts()});
  $("#searchInput").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();$("#suggestions").classList.remove("open");renderProducts()}if(e.key==="ArrowDown"){const first=$(".suggestion-item",$("#suggestions"));if(first){e.preventDefault();first.focus()}}});
  $("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";renderSuggestions();renderProducts();$("#searchInput").focus()});
  $("#categoryFilter").addEventListener("change",()=>{visibleLimit=8;renderProducts()});$("#sortSelect").addEventListener("change",renderProducts);$("#saleOnly").addEventListener("change",renderProducts);
  $("#resetFilters").addEventListener("click",()=>{$("#searchInput").value="";$("#categoryFilter").value="";$("#sortSelect").value="featured";$("#saleOnly").checked=false;visibleLimit=8;renderSuggestions();renderProducts()});
  $("#loadMore").addEventListener("click",()=>{visibleLimit+=8;renderProducts()});
  $("#menuToggle").addEventListener("click",()=>{const open=$("#mainNav").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));$("#menuToggle").textContent=open?"×":"☰"});
  $$("#mainNav a").forEach(a=>a.addEventListener("click",()=>{$("#mainNav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");$("#menuToggle").textContent="☰"}));
  $("#langToggle").addEventListener("click",()=>{lang=lang==="en"?"si":"en";setStore("cpn_lang",lang);setLanguage()});
  $("#cartOpen").addEventListener("click",()=>{renderCart();openDrawer("cartDrawer")});$("#wishlistOpen").addEventListener("click",()=>{renderWishlist();openDrawer("wishlistDrawer")});
  $$("[data-dialog-close]").forEach(b=>b.addEventListener("click",()=>b.closest("dialog").close()));
  $("#productDialog").addEventListener("click",e=>{if(e.target===$("#productDialog"))$("#productDialog").close()});
  $("#checkoutDialog").addEventListener("click",e=>{if(e.target===$("#checkoutDialog"))$("#checkoutDialog").close()});
  $("#adminOpen").addEventListener("click",e=>{e.preventDefault();renderAdminList();resetProductForm();$("#adminDialog").showModal()});
  $("#addProductBtn").addEventListener("click",()=>{resetProductForm();$("#productForm").hidden=false;$("#productFormTitle").textContent="Add product";$("#productForm").scrollIntoView({behavior:"smooth",block:"start"})});
  $("#cancelProductEdit").addEventListener("click",resetProductForm);
  $("#productForm").addEventListener("submit",e=>{
    e.preventDefault();const f=e.currentTarget, data=new FormData(f), oldId=String(data.get("id")||"");
    let record={id:oldId||"CPN-"+Date.now().toString(36).toUpperCase(),name:String(data.get("name")||"").trim(),nameSi:String(data.get("nameSi")||"").trim(),scientific:String(data.get("scientific")||"").trim(),category:String(data.get("category")||""),price:data.get("price"),salePrice:data.get("salePrice")||null,stock:Number(data.get("stock")),image:String(data.get("image")||"").trim(),images:String(data.get("images")||"").split("\n").map(x=>x.trim()).filter(validImage),description:String(data.get("description")||"").trim(),fullDescription:String(data.get("fullDescription")||"").trim(),keywords:String(data.get("keywords")||"").trim(),size:String(data.get("size")||"").trim(),sunlight:String(data.get("sunlight")||"").trim(),watering:String(data.get("watering")||"").trim(),featured:f.elements.featured.checked,newArrival:f.elements.newArrival.checked,published:f.elements.published.checked,createdAt:products.find(p=>p.id===oldId)?.createdAt||new Date().toISOString().slice(0,10)};
    try{record=validProduct(record);if(oldId){products=products.map(p=>p.id===oldId?record:p)}else products.unshift(record);saveProducts();renderAdminList();renderProducts();renderCounts();renderCart();$("#adminFormMessage").textContent=`Saved. Calculated discount: ${discount(record)}%.`;toast("Product saved in this browser.");resetProductForm()}catch(err){$("#adminFormMessage").textContent=err.message}
  });
  $("#exportBtn").addEventListener("click",()=>{const blob=new Blob([JSON.stringify({products,categories,exportedAt:new Date().toISOString()},null,2)],{type:"application/json"});const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="chamal-plant-nursery-catalogue.json";a.click();URL.revokeObjectURL(url);toast("Catalogue export prepared.")});
  $("#importFile").addEventListener("change",async e=>{const file=e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text()), list=Array.isArray(data)?data:data.products;if(!Array.isArray(list))throw Error("JSON must contain a products array.");products=list.map(p=>validProduct({...p,id:String(p.id||"CPN-"+Math.random().toString(36).slice(2,9)),images:Array.isArray(p.images)?p.images:[]}));if(Array.isArray(data.categories))categories=data.categories.filter(c=>c&&typeof c.name==="string");saveProducts();setStore("cpn_categories",categories);renderCategories();renderAdminList();renderProducts();toast("Catalogue imported into this browser.")}catch(err){toast("Import failed: "+err.message)}finally{e.target.value=""}});
  $("#resetDemoBtn").addEventListener("click",()=>{if(confirm("Replace your current local catalogue with the original demo data?")){products=JSON.parse(JSON.stringify(demoProducts));categories=categorySeed.map(c=>({name:c[0],nameSi:c[1],image:c[2]}));saveProducts();setStore("cpn_categories",categories);renderCategories();renderAdminList();renderProducts();toast("Demo catalogue restored.")}});
  $("#orderForm").addEventListener("submit",e=>{
    e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;
    const fd=new FormData(f), lines=cart.map(l=>({l,p:products.find(p=>p.id===l.id)})).filter(x=>x.p);
    const subtotal=lines.reduce((n,x)=>n+productPrice(x.p)*x.l.qty,0);
    const message=["Hello Chamal Plant Nursery (Pvt) Ltd, I would like to make an order inquiry.","","Customer name: "+String(fd.get("customerName")).trim(),"Phone: "+String(fd.get("phone")).trim(),"Address / collection details: "+String(fd.get("address")).trim(),"","Requested items:",...lines.map(({l,p})=>`• ${p.name} (ID: ${p.id}) × ${l.qty} — ${money(productPrice(p))} each = ${money(productPrice(p)*l.qty)}`),"","Estimated subtotal: "+money(subtotal),"Delivery: Please confirm availability and any delivery charges.","Additional notes: "+(String(fd.get("notes")||"").trim()||"None"),"","I understand this is an inquiry and is not confirmed until the nursery responds."].join("\n");
    window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(message),"_blank","noopener");$("#checkoutDialog").close();toast("WhatsApp opened. Please send the prepared message there.");
  });
  $("#year").textContent=new Date().getFullYear();
  // Persist category edits from import and initialize views.
  setLanguage();renderProducts();renderCounts();renderCart();renderWishlist();
  // Ensure all sample images gracefully fall back if an external image is unavailable.
  document.addEventListener("error",e=>{if(e.target instanceof HTMLImageElement&&e.target.dataset.fallbackApplied!=="1"){e.target.dataset.fallbackApplied="1";e.target.src=safeImage}},true);
})();