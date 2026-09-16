

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { EmojihubSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SimilarEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when EMOJIHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('EMOJIHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = EmojihubSDK.test()
    const ent = testsdk.Similar()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.EMOJIHUB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'similar.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":true,"short":"The category the emoji belongs to","type":"`$STRING`","index$":0},{"active":true,"name":"group","req":true,"short":"The group the emoji belongs to","type":"`$STRING`","index$":1},{"active":true,"name":"htmlCode","req":true,"short":"Array of HTML entity codes for the emoji","type":"`$ARRAY`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"name","req":true,"short":"The name of the emoji","type":"`$STRING`","index$":4},{"active":true,"name":"unicode","req":true,"short":"Array of Unicode code points for the emoji","type":"`$ARRAY`","index$":5}],"id":{"field":"id","name":"id"},"name":"similar","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"cat","kind":"param","name":"id","orig":"name","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /similar/{name}","json":"{\"operationId\":\"getSimilarEmojis\",\"parameters\":[{\"description\":\"The emoji name to find similar emojis for\",\"example\":\"cat\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"category\":\"smileys and people\",\"group\":\"face positive\",\"htmlCode\":[\"&#128512;\"],\"name\":\"grinning face\",\"unicode\":[\"U+1F600\"]},{\"category\":\"smileys and people\",\"group\":\"face positive\",\"htmlCode\":[\"&#128513;\"],\"name\":\"smiling face with smiling eyes\",\"unicode\":[\"U+1F601\"]}],\"schema\":{\"items\":{\"properties\":{\"category\":{\"description\":\"The category the emoji belongs to\",\"example\":\"smileys and people\",\"type\":\"string\"},\"group\":{\"description\":\"The group the emoji belongs to\",\"example\":\"face positive\",\"type\":\"string\"},\"htmlCode\":{\"description\":\"Array of HTML entity codes for the emoji\",\"example\":[\"&#129303;\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the emoji\",\"example\":\"hugging face\",\"type\":\"string\"},\"unicode\":{\"description\":\"Array of Unicode code points for the emoji\",\"example\":[\"U+1F917\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"name\",\"category\",\"group\",\"htmlCode\",\"unicode\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"No similar emojis found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/similar/{name}","rename":{"param":{"name":"id"}},"segments":[{"lit":"similar"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"similar","name__orig":"similar","Name":"Similar","name_":"similar","name-":"similar","NAME":"SIMILAR","index$":5}, {"active":true,"entity":"similar","key$":"BasicSimilarFlow","kind":"basic","name":"BasicSimilarFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"similar_ref01","srcdatavar":"similar_ref01_data","suffix":"_dt0"},"match":{"id":"similar01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-similar_ref01"}}],"index$":0}]}, 'Similar')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let similar_ref01_data = Object.values(setup.data.existing.similar)[0] as any

    // LOAD
    const similar_ref01_ent = client.Similar()
    const similar_ref01_match_dt0: any = {}
    similar_ref01_match_dt0.id = similar_ref01_data.id
    const similar_ref01_data_dt0 = (await similar_ref01_ent.load(similar_ref01_match_dt0)).data()
    assert(similar_ref01_data_dt0.id === similar_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/similar/SimilarTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = EmojihubSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['similar01','similar02','similar03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'EMOJIHUB_TEST_SIMILAR_ENTID': idmap,
    'EMOJIHUB_TEST_LIVE': 'FALSE',
    'EMOJIHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['EMOJIHUB_TEST_SIMILAR_ENTID']

  const live = 'TRUE' === env.EMOJIHUB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['EMOJIHUB_TEST_SIMILAR_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new EmojihubSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.EMOJIHUB_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
