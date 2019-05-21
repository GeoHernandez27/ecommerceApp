import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
}   from './types';

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload:_id
    })
}
export function fetchShopProducts(done) {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload:  [
            {
                _id:0,
                title: 'All',
                
            },
            {
                _id:1,
                title: 'Javascript'
            },
            {
                _id:2,
                title: 'UI/UX'
            },
            {
                _id:3,
                title: 'Linux'
            },
            {  
                _id:4,
                title: 'Python'
            },
            {
                _id:5,
                title: 'UML'
            },
            {
                _id:6,
                title: 'Ruby'
            },
        ]
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id:0,
                title: 'Javascript in the Browser',
                description: 'Lorem ipsum dolor sit amet, sit et vel porttitor ullamcorper. Odio tellus. Quis est nibh penatibus, euismod sed lacus fringilla non. A pulvinar duis magna justo risus, nunc turpis orci gravida nunc non, libero vitae egestas sed etiam, mi auctor accumsan at donec rhoncus diam.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id:1,
                title: 'Graph Database',
                description: 'Lacus habitant suspendisse sodales, ut sodales ipsum fusce, ut cras elit dignissim, tortor risus pede lorem maecenas, recusandae volutpat. Risus fermentum. Aenean in magna tellus, nulla quis deserunt et risus quam, nunc wisi ligula semper, mauris pellentesque.',
                price: 2.99,
                belongsTo: [0, 6]
            },
            {
                _id:2,
                title: 'Full Stack Development',
                description: 'Vestibulum cum vel aliquam fermentum imperdiet, mauris volutpat nascetur luctus libero arcu, lectus lorem in id platea, eget eu, dui est feugiat vestibulum cursus. Arcu ac, donec scelerisque sit nam, id iaculis nunc, habitasse tortor quisque integer.',
                price: 3.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id:3,
                title: 'User Interface Design',
                description: 'Nec ipsum congue ut arcu. Semper adipiscing, at dolor pharetra ut quam eu, scelerisque vulputate ullamcorper adipiscing lacus malesuada. Litora sed, erat ante. Ut cursus lectus vel integer, nam a placerat, cras orci praesent vehicula quam, nulla id felis quis aliquam pulvinar commodo.',
                price: 2.99,
                belongsTo: [0, 2]
            },
            {  
                _id:4,
                title: 'JavaScript Development',
                description: 'Tristique dui est vel est a, velit volutpat ac a suscipit non ut. Dolor urna enim conubia commodo ut nulla, at erat massa orci turpis eu urna, placerat eget ultrices ridiculus eros, a cras id, tortor dictum. Adipiscing mi rutrum, purus rutrum quisque gravida.',
                price: 4.99,
                belongsTo: [0, 1]
            },
            {
                _id:5,
                title: 'User Experience Design',
                description: 'A vel laoreet sed cras dui. Eros quam, per id iaculis ipsum tellus, ullamcorper sit ipsum in nisl justo, metus volutpat sit eget, accumsan nunc a tellus parturient. Odio ultricies semper dui luctus, morbi in sit urna lorem, odio aenean integer elementum ac sodales neque, ultricies eros nunc.',
                price: 0.99,
                belongsTo: [0, 2]
            },
            {
                _id:6,
                title: 'Advanced OOP',
                description: 'Ut nec tellus quis nisl, dolor lorem sit platea nec. Scelerisque sodales augue lacus cursus leo dolor, aliquam nulla malesuada volutpat, morbi ipsum non congue ornare ligula, vehicula faucibus, nunc amet lorem rutrum est.',
                price: 1.99,
                belongsTo: [0, 6]
            },
        ]
    })
}

