 import React from 'react';

export default function TripPackage(){
    return (
        <div>
          <h1 className=" text-danger text-center text-capitalize m-2 p-2">Packages</h1>
            <table class="table table-hover text-center bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Package Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Goa Offers</td>
      <td>5110</td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jammu&Kashmir Offers</td>
      <td>6789</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Tirupati Offers</td>
      <td>5000</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
