import React from "react";

const PrimeNumberTable = ({ primes }) => {
  return (
    <div className="m-4">
      <h2 className="mb-4 text-center">
        A Multiplication Table of all Prime Numbers before
        {" " + primes["value"] || " 0 "} {/* {primes["listOfPrimes"]} */} <br />
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-dark table-md ">
          <thead>
            <tr>
              {primes["listOfPrimes"].map((prime, key) => (
                <th key={key}> {prime} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {primes["listOfProducts"].map((primes, key) => (
              <tr key={key}>
                {primes.map((prime, key) => (
                  <td key={key}> {prime} </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrimeNumberTable;
