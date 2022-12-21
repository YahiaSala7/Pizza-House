import React from 'react'
import './leftparagraoh.css'

function leftparagraoh() {
  return (
    <div>
           <div class="Leftparagraoh">
                <h5>10+ years of experience</h5>
                <ul class="parragraphs">
                  <li>
                    <a class="active" href="#tabs-4-1" data-toggle="tab">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-4-2" data-toggle="tab">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-4-3" data-toggle="tab">
                      Our Goals
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-4-4" data-toggle="tab">
                      Our Values
                    </a>
                  </li>
                </ul>
                <button className="button">Contact US</button>
              </div>
    </div>
  )
}
export default leftparagraoh;
