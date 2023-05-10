import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Producto, productos } from '../productos';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  producto: Producto | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routerParams = this.route.snapshot.paramMap;
    const idProductoDeRuta = Number(routerParams.get('productoId'))

    this.producto = productos.find(producto => producto.id === idProductoDeRuta);
  }
}
