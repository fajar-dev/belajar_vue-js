<template>

  <div class="container">
    <div class="row d-flex justify-content-between align-items-center my-5">
      <div class="col-6">
        <h1> Data User </h1>
      </div>
      <div class="col-6 text-end">
        <router-link :to="{name: 'user.create'}" class="btn btn-primary"> Tambah Data</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card shadow-lg rounded border-0">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <router-link :to="{name: 'user.edit', params:{id: 1}}" class="btn btn-warning">
                      Edit
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template> 
<script>
export default {
  
}
</script>