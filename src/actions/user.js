import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT
} from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id
  };
}

export function addCartProduct(product){
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}
export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0, 
        product: {
          _id: 0,
          title: "Javascript in the Browser",
          description:
            "Lorem ipsum dolor sit amet, sit et vel porttitor ullamcorper. Odio tellus. Quis est nibh penatibus, euismod sed lacus fringilla non. A pulvinar duis magna justo risus, nunc turpis orci gravida nunc non, libero vitae egestas sed etiam, mi auctor accumsan at donec rhoncus diam.",
          price: 1.99,
          belongsTo: [0, 1]
        },
        quantity: 2
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "Graph Database",
          description:
            "Lacus habitant suspendisse sodales, ut sodales ipsum fusce, ut cras elit dignissim, tortor risus pede lorem maecenas, recusandae volutpat. Risus fermentum. Aenean in magna tellus, nulla quis deserunt et risus quam, nunc wisi ligula semper, mauris pellentesque.",
          price: 2.99,
          belongsTo: [0, 6]
        },
        quantity: 3
      }
    ]
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 1,
        total: 19.4,
        orderNumber: "A99435345346",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jon Smith",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 2,
        total: 14.89,
        orderNumber: "A99435234",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jon Smith",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 3,
        total: 10.99,
        orderNumber: "A994345345",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jon Smith",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 4,
        total: 19.4,
        orderNumber: "A99435677",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jon Smith",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 5,
        total: 34.99,
        orderNumber: "A9967867878",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jon Smith",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 6,
        total: 9.5,
        orderNumber: "A96786786",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jon Smith",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 7,
        total: 1.99,
        orderNumber: "A97867876456",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jon Smith",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 8,
        total: 11.5,
        orderNumber: "A78546354",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jon Smith",
          shippingAddress: "1234 West State St"
        }
      }
    ]
  };
}
