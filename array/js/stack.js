function Stack() {
    var items = []

    this.push = function(element) {
        // adiciona um item a pilha
        items.push(element)
    }

    this.pop = function() {
        //remove um item da pelha
        return items.pop()
    }

    this.peek = function() {
        //devolve o elemento que esta no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        //informa se a pilha esta vazia ou não
        return items.length === 0
    }

    this.clear = function() {
        // limpa a pilha
        items = []
    }

    this.size = function() {
        // informa o tamanho
        return items.length
    }

    this.print = function() {
        //imprime a pilha no console
        console.log(items.toString())
    }
}