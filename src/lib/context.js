const baseContext = {
    props: {},
    defaults: {},
    pass(values) {
        return Object.assign(values, this.defaults);
    },
};

const context = contextDef => Object.assign(baseContext, contextDef);

export default context;
