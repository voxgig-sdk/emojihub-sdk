

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


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when EMOJIHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('EMOJIHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = EmojihubSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.EMOJIHUB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":true,"short":"The category the emoji belongs to","type":"`$STRING`","index$":0},{"active":true,"name":"group","req":true,"short":"The group the emoji belongs to","type":"`$STRING`","index$":1},{"active":true,"name":"htmlCode","req":true,"short":"Array of HTML entity codes for the emoji","type":"`$ARRAY`","index$":2},{"active":true,"name":"name","req":true,"short":"The name of the emoji","type":"`$STRING`","index$":3},{"active":true,"name":"unicode","req":true,"short":"Array of Unicode code points for the emoji","type":"`$ARRAY`","index$":4}],"name":"search","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"smile","kind":"query","name":"q","orig":"q","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /search","json":"{\"operationId\":\"searchEmojis\",\"parameters\":[{\"description\":\"The search query string\",\"example\":\"smile\",\"in\":\"query\",\"name\":\"q\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"category\":\"smileys and people\",\"group\":\"cat face\",\"htmlCode\":[\"&#128572;\"],\"name\":\"cat face with wry smile\",\"unicode\":[\"U+1F63C\"]}],\"schema\":{\"items\":{\"properties\":{\"category\":{\"description\":\"The category the emoji belongs to\",\"example\":\"smileys and people\",\"type\":\"string\"},\"group\":{\"description\":\"The group the emoji belongs to\",\"example\":\"face positive\",\"type\":\"string\"},\"htmlCode\":{\"description\":\"Array of HTML entity codes for the emoji\",\"example\":[\"&#129303;\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the emoji\",\"example\":\"hugging face\",\"type\":\"string\"},\"unicode\":{\"description\":\"Array of Unicode code points for the emoji\",\"example\":[\"U+1F917\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"name\",\"category\",\"group\",\"htmlCode\",\"unicode\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"},\"400\":{\"description\":\"Missing or invalid query parameter\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/search","segments":[{"lit":"search"}],"select":{"exist":["q"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":4}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

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
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'EMOJIHUB_TEST_SEARCH_ENTID': idmap,
    'EMOJIHUB_TEST_LIVE': 'FALSE',
    'EMOJIHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['EMOJIHUB_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.EMOJIHUB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['EMOJIHUB_TEST_SEARCH_ENTID']
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
  
