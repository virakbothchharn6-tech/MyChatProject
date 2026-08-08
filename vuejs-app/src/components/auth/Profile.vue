<template>
  <div class="wrapper">
    <!-- Navbar ខាងលើ -->
    <Navbar />

    <!-- Left Sidebar ម៉ឺនុយខាងឆ្វេង -->
    <LeftSidebar />

    <!-- Content Wrapper -->
    <div class="content-wrapper" style="min-height: 1175px">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">User Profile</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">User Profile</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <!-- LEFT COLUMN -->
            <div class="col-md-3">
              <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                  <div class="text-center">
                    <img
                      class="profile-user-img img-fluid img-circle"
                      :src="emptyImage"
                      alt="User profile picture"
                    />
                  </div>
                  <h3 class="profile-username text-center">
                    {{ userStore.name }}
                  </h3>
                  <p class="text-muted text-center">Software Engineer</p>

                  <ul class="list-group list-group-unbordered mb-3">
                    <li class="list-group-item">
                      <b>Followers</b> <a class="float-right">1,322</a>
                    </li>
                    <li class="list-group-item">
                      <b>Following</b> <a class="float-right">543</a>
                    </li>
                    <li class="list-group-item">
                      <b>Friends</b> <a class="float-right">13,287</a>
                    </li>
                  </ul>

                  <a href="#" class="btn btn-primary btn-block"
                    ><b>Follow</b></a
                  >
                </div>
              </div>

              <!-- About Me Box -->
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">About Me</h3>
                </div>
                <div class="card-body">
                  <strong><i class="fas fa-book mr-1"></i> Education</strong>
                  <p class="text-muted">
                    B.S. in Computer Science from the University of Tennessee at
                    Knoxville
                  </p>
                  <hr />

                  <strong
                    ><i class="fas fa-map-marker-alt mr-1"></i> Location</strong
                  >
                  <p class="text-muted">Malibu, California</p>
                  <hr />

                  <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>
                  <p class="text-muted">
                    <span class="badge badge-danger mr-1">UI Design</span>
                    <span class="badge badge-success mr-1">Coding</span>
                    <span class="badge badge-info mr-1">Javascript</span>
                    <span class="badge badge-warning mr-1">PHP</span>
                    <span class="badge badge-primary">Node.js</span>
                  </p>
                  <hr />

                  <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <!-- RIGHT COLUMN -->
            <div class="col-md-9">
              <div class="card">
                <div class="card-header p-2">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#activity"
                        data-toggle="tab"
                        >Activity</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#timeline" data-toggle="tab"
                        >Timeline</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#settings" data-toggle="tab"
                        >Settings</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content">
                    <!-- Activity Tab -->
                    <div class="active tab-pane" id="activity">
                      <div class="post">
                        <div class="user-block">
                          <img
                            class="img-circle img-bordered-sm"
                            :src="emptyImage"
                            alt="user image"
                          />
                          <span class="username">
                            <a href="#">Jonathan Burke Jr.</a>
                            <a href="#" class="float-right btn-tool"
                              ><i class="fas fa-times"></i
                            ></a>
                          </span>
                          <span class="description"
                            >Shared publicly - 7:30 PM today</span
                          >
                        </div>
                        <p>
                          Lorem ipsum represents a long-held tradition for
                          designers, typographers and the like. Some people hate
                          it and argue for its demise, but others ignore the
                          hate as they create awesome tools to help create
                          filler text for everyone from bacon lovers to Charlie
                          Sheen fans.
                        </p>

                        <p>
                          <a href="#" class="link-black text-sm mr-2"
                            ><i class="fas fa-share mr-1"></i> Share</a
                          >
                          <a href="#" class="link-black text-sm mr-2"
                            ><i class="far fa-thumbs-up mr-1"></i> Like</a
                          >
                          <span class="float-right">
                            <a href="#" class="link-black text-sm">
                              <i class="far fa-comments mr-1"></i> Comments (5)
                            </a>
                          </span>
                        </p>

                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Type a comment"
                        />
                      </div>

                      <!-- Post 2 -->
                      <div class="post clearfix">
                        <div class="user-block">
                          <img
                            class="img-circle img-bordered-sm"
                            :src="emptyImage"
                            alt="User Image"
                          />
                          <span class="username">
                            <a href="#">Sarah Ross</a>
                            <a href="#" class="float-right btn-tool"
                              ><i class="fas fa-times"></i
                            ></a>
                          </span>
                          <span class="description"
                            >Sent you a message - 3 days ago</span
                          >
                        </div>
                        <p>
                          Lorem ipsum represents a long-held tradition for
                          designers, typographers and the like. Some people hate
                          it and argue for its demise.
                        </p>

                        <form class="form-horizontal">
                          <div class="input-group input-group-sm mb-0">
                            <input
                              class="form-control form-control-sm"
                              placeholder="Response"
                            />
                            <div class="input-group-append">
                              <button type="submit" class="btn btn-danger">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <!-- Timeline Tab -->
                    <div class="tab-pane" id="timeline">
                      <p class="text-muted">Timeline content goes here...</p>
                    </div>

                    <!-- Settings Tab -->
                    <div class="tab-pane" id="settings">
                      <p class="text-muted">Settings form goes here...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer ខាងក្រោម -->
    <Footer />
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import emptyImage from "@/assets/images/emptyImage.png";
import Navbar from "@/components/includes/Navbar.vue";
import LeftSidebar from "@/components/includes/LeftSidebar.vue";
import Footer from "@/components/includes/Footer.vue";

const userStore = useUserStore();
</script>
