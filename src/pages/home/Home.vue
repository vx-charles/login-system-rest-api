<template>
  <div id="home">
    <div class="content">
      <div class="page-title">Dashboard <small>(Servidor Elastic Search AWS)</small></div>
      <div class="graph-items">
        <div class="graph">
          <div class="graph-title">Consumo de CPU</div>
          <div class="graph-desc">Usado para recuperar as informações de uso de CPU do cluster de Elastic Search.</div>
          <div class="chartjs-render">
            <area-chart width="100%" :data="chartLineData"></area-chart>
          </div>
        </div>
        <div class="graph">
          <div class="graph-title">Consumo de memória</div>
          <div class="graph-desc">Usado para recuperar os dados de utilização de memoria do cluster de Elastic Search.</div>
          <div class="chartjs-render">
            <bar-chart width="100%" :data="chartColumnData"></bar-chart>
          </div>
        </div>
        <div class="graph">
          <div class="graph-title">Status do cluster do domínio</div>
          <div class="status">
            <div class="graph-desc">Usado para recuperar o status do cluster de Elastic Search.</div>
            <div class="status-color">
              <span>Status: </span>
              <div class="rect" v-bind:style="{ background: chartStatus }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      chartLineData: null,
      chartColumnData: null,
      chartStatus: null
    }
  },
  async created () {
    // GET CPU
    const getCPU = await fetch('https://run.mocky.io/v3/b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f')
    const { data, labels } = await getCPU.json()
    this.chartLineData = [data, labels]

    const resultLine = labels.map((label, index) => (
      [label, data[index]]
    ))
    this.chartLineData = resultLine

    // GET MEMORY
    const getMemory = await fetch('https://run.mocky.io/v3/d23c3262-967e-4567-b7f6-2fd263748811')
    const { data: dataColumn, labels: labelColumn } = await getMemory.json()
    this.chartColumnData = [dataColumn, labelColumn]

    const resultColumn = labelColumn.map((label, index) => (
      [label, dataColumn[index]]
    ))
    this.chartColumnData = resultColumn

    // GET STATUS
    const getStatus = await fetch('https://run.mocky.io/v3/cab2791c-7c85-4461-b95c-86bc1a12dc72')
    const { status } = await getStatus.json()
    this.chartStatus = status
  }
}
</script>

<style lang="scss" src="../../assets/scss/home.scss" scoped />
