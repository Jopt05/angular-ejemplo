import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { CartComponent } from "./cart/cart.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: ProductListComponent },
            { path: 'products/:productId', component: ProductDetailsComponent },
            { path: 'cart', component: CartComponent },
            { path: 'shipping', component: ShippingComponent }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }