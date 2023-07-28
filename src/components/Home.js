import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <div className="center">
        <img src="blog.jpg" className="rounded mx-auto d-block" alt="..." />

        <div className="genre1 ">
          <div class="card" style={{ width: "18rem" }}>
            <img src="bok.jpg" class="card-img-top" alt="" />
            <div class="card-body">
              <h3>Book Reviews</h3>
              <p class="card-text">
                Do you have any reviews about the last book that you read..??
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="fashion.jpg" class="card-img-top" alt="" />
            <div class="card-body">
              <h3>Fashion Blogs</h3>
              <p class="card-text">
                Everyone's a fashion icon, let people know about your taste
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="food.jpg" class="card-img-top" alt="" />
            <div class="card-body">
              <h3>Food Blogs</h3>
              <p class="card-text">
                Whatever good happens in kitchen, should never stay in kitchen.
                Share your reciepes and reviews
              </p>
            </div>
          </div>
        </div>
        <div className="genre2">
          <div class="card" style={{ width: "18rem" }}>
            <img src="tch.jpg" class="card-img-top" alt="" />
            <div class="card-body">
              <h3>Tech Blogs</h3>
              <p class="card-text">
                Get your head around the latest technologies with tech blogs
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="trav.jpg" class="card-img-top" alt="" />
            <div class="card-body">
              <h3>Travle Blogs</h3>
              <p class="card-text">
                When to move around the world, make sure your stories goes
                too..!!
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="wedding.jpg" class="card-img-top" alt="" />
            <div class="card-body">
              <h3> Beautiful Memories 🤍</h3>
              <p class="card-text">
                We are all ears for your personal life shenanigans
              </p>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginBottom: "15px" }}>
          <div className="card">
            <img src="map1.png" className="rounded" />
            <div className="card-img-overlay">
              <div className="card-body text-dark">
                <h1 className="fw-md card-title display-6 fw-semibold">
                  Join Bloggers Community
                </h1>
                <p className="fs-5 card-subtitle fw-medium">
                  The World is waiting for your <br /> stories, experiences,
                  news,
                  <br /> adventures and a lot of things.
                  <br /> Do you wish to tell??
                </p>
                {/* <button
                  className="btn btn-dark btn-md mt-3"
                  style={{ width: "180px" }}
                  type="button"
                  onClick={toindex}
                >
                  Create Your Blog
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#222" }}>
        <footer className="py-2">
          <p
            className="text-center fw-lg fs-5 "
            style={{ height: "30px", color: "#fff" }}
          >
            BlogPosts © 2023 (Project By Priyanshu Mishra)
          </p>
        </footer>
      </div>
    </div>
  );
}
