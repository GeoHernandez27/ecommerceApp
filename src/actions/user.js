import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases(){
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A99435345346',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Smith',
                    shippingAddress: '1234 West State St'
                }

            },
            {
                _id: 2,
                total: 14.89,
                orderNumber: 'A99435234',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Smith',
                    shippingAddress: '1234 West State St'
                }

            },
            {
                _id: 3,
                total: 10.99,
                orderNumber: 'A994345345',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Smith',
                    shippingAddress: '1234 West State St'
                }

            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: 'A99435677',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Smith',
                    shippingAddress: '1234 West State St'
                }

            },
            {
                _id: 5,
                total: 34.99,
                orderNumber: 'A9967867878',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Smith',
                    shippingAddress: '1234 West State St'
                }

            },
            {
                _id: 6,
                total: 9.50,
                orderNumber: 'A96786786',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Smith',
                    shippingAddress: '1234 West State St'
                }

            },
            {
                _id: 7,
                total: 1.99,
                orderNumber: 'A97867876456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Smith',
                    shippingAddress: '1234 West State St'
                }

            },
            {
                _id: 8,
                total: 11.50,
                orderNumber: 'A78546354',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Smith',
                    shippingAddress: '1234 West State St'
                }

            }
        ]
    })
}