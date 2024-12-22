import { SLOT_CONFIG_NETWORK } from "@meshsdk/common";
import { OfflineEvaluator } from "@meshsdk/core-csl";
import { OfflineFetcher } from "@meshsdk/provider";

describe("Offline Evaluator", () => {
  let evaluator: OfflineEvaluator;
  let fetcher: OfflineFetcher;

  beforeEach(() => {
    fetcher = new OfflineFetcher();
    evaluator = new OfflineEvaluator(fetcher, "preprod");
  });

  it("should successfully evaluate correct tx", async () => {
    const txHex =
      "84a900818258205de23a200f136e657307bc69173dddaf38b446bd7242a50f5bf255e329018b65030182a300581d70eafce55e4f0e057b495f77d8019577c56ae1fe188dc7e6d63f4f93b801821a001e8480a1581c32b7e3d552b2b18cb9bf1a39e6e1ce75f62c084f2b917a44c071a3bda14001028201d81858b4d8799f582461666461373264392d383039332d343330332d623030652d3233616362323934313432661a06acfc00d8799fd8799f581c5e0abc8c791c220b8c56e729cb77e95c03c7bd27971896dda0ac2368ffd8799fd8799fd8799f581cc8fdacb82c1cec476d444f559c28f4b75ddb6f483fe20427683a661affffffff1b0000019223dc5f75d8799fd8799f58205f759f3527a47632735470586a7ab2fbee4b4aa8b6504d52d52bc62fa8ec961aff00ff01ff825839005e0abc8c791c220b8c56e729cb77e95c03c7bd27971896dda0ac2368c8fdacb82c1cec476d444f559c28f4b75ddb6f483fe20427683a661a1a15a2ae54021a000d5ab0031a0442ee8109a1581c32b7e3d552b2b18cb9bf1a39e6e1ce75f62c084f2b917a44c071a3bda140010b5820c131e4b612c1a50ddcb739f58185148a26c6beaa198d036f5f9e4e8c7d458de20d8382582002345ff40e1b8730434571b8b4749ad084b2cd582aa8997fa7416be8b76c7da80082582002345ff40e1b8730434571b8b4749ad084b2cd582aa8997fa7416be8b76c7da8058258201c4ef054932bafcb4a59810f31fa0ed001d6611066938d1a1aef1d1237c0a441020e81581cc6aa7af71f8ba577246149edf075d2edd9daa63980b7ca176799af6c128382582066b7282bad1aef9ba0a99f06e618d651d232d4788f0d2ee2d22db22a62391033008258205f759f3527a47632735470586a7ab2fbee4b4aa8b6504d52d52bc62fa8ec961a008258201c4ef054932bafcb4a59810f31fa0ed001d6611066938d1a1aef1d1237c0a44100a10581840100d8799fd8799f58205f759f3527a47632735470586a7ab2fbee4b4aa8b6504d52d52bc62fa8ec961aff00ff821a006acfc01ab2d05e00f5f6";
    const utxo_1 = {
      input: {
        outputIndex: 3,
        txHash:
          "5de23a200f136e657307bc69173dddaf38b446bd7242a50f5bf255e329018b65",
      },
      output: {
        address:
          "addr_test1qrsaqj54nyedfg74tye8743tkrclgnfztj6z937g50q0fwv6vwcuvc9guftgju6xav470f6da9guk8t3nn46wd34z43s99hwxv",
        amount: [{ unit: "lovelace", quantity: "365858180" }],
        scriptHash: undefined,
      },
    };
    const utxo_2 = {
      input: {
        outputIndex: 0,
        txHash:
          "02345ff40e1b8730434571b8b4749ad084b2cd582aa8997fa7416be8b76c7da8",
      },
      output: {
        address:
          "addr_test1qrsaqj54nyedfg74tye8743tkrclgnfztj6z937g50q0fwv6vwcuvc9guftgju6xav470f6da9guk8t3nn46wd34z43s99hwxv",
        amount: [{ unit: "lovelace", quantity: "5000000" }],
        scriptHash: undefined,
      },
    };
    const utxo_3 = {
      input: {
        outputIndex: 5,
        txHash:
          "02345ff40e1b8730434571b8b4749ad084b2cd582aa8997fa7416be8b76c7da8",
      },
      output: {
        address:
          "addr_test1qrsaqj54nyedfg74tye8743tkrclgnfztj6z937g50q0fwv6vwcuvc9guftgju6xav470f6da9guk8t3nn46wd34z43s99hwxv",
        amount: [{ unit: "lovelace", quantity: "5000000" }],
        scriptHash: undefined,
      },
    };
    const utxo_4 = {
      input: {
        outputIndex: 0,
        txHash:
          "1c4ef054932bafcb4a59810f31fa0ed001d6611066938d1a1aef1d1237c0a441",
      },
      output: {
        address:
          "addr_test1qrsaqj54nyedfg74tye8743tkrclgnfztj6z937g50q0fwv6vwcuvc9guftgju6xav470f6da9guk8t3nn46wd34z43s99hwxv",
        amount: [{ unit: "lovelace", quantity: "123000000" }],
        scriptHash: undefined,
      },
    };
    const utxo_5 = {
      input: {
        outputIndex: 2,
        txHash:
          "1c4ef054932bafcb4a59810f31fa0ed001d6611066938d1a1aef1d1237c0a441",
      },
      output: {
        address:
          "addr_test1qrsaqj54nyedfg74tye8743tkrclgnfztj6z937g50q0fwv6vwcuvc9guftgju6xav470f6da9guk8t3nn46wd34z43s99hwxv",
        amount: [{ unit: "lovelace", quantity: "5000000" }],
        scriptHash: undefined,
      },
    };
    const utxo_6 = {
      input: {
        outputIndex: 0,
        txHash:
          "66b7282bad1aef9ba0a99f06e618d651d232d4788f0d2ee2d22db22a62391033",
      },
      output: {
        address:
          "addr_test1qp0q40yv0ywzyzuv2mnjnjmha9wq83aay7t339ka5zkzx6xglkktstqua3rk63z02kwz3a9hthdk7jplugzzw6p6vcdqa39gds",
        amount: [{ unit: "lovelace", quantity: "26000000" }],
        scriptHash: "32b7e3d552b2b18cb9bf1a39e6e1ce75f62c084f2b917a44c071a3bd",
        scriptRef:
          "8202590eca590ec701000033232323232323223223232322533300832323232323232323232323232323232323232323232323232323232323232323232323232323232325333031302d30323754002264a66606460540022a666064666018910103313333000063758601660686ea8c080c0d0dd50158a9998191998050031bac301130343754604060686ea80acdd61810181a1baa30203034375405626666444464646464a666074606c60766ea80044c8c8c8c8c8c8c94ccc10402854ccc10402454ccc10401854ccc10400c54ccc10400840045280a5014a0294052819192999821181f0008b0a999821181d000899b89375a608e60886ea8008dd6982398241824182418221baa0061630423754002605c60846ea8c114c118c108dd50059980f99baf301a30413754006605a60826ea8059240132496e74656e7420646174756d2073686f756c6420636f6e7461696e20616c6c206d61746368696e6720726566732075736564003301e3375e605860806ea8010c084c100dd50092493f496e74656e7420746f6b656e2073686f756c64206f6e6c7920657665722062652073656e7420746f20696e74656e74207370656e64696e672073637269707400533303d3039303e37540022646464646464646464646464a666098609e0042646493182280218178038b18268009826801182580098258011bad3049001304900230470013047002375a608a002608a0046086002607e6ea800458cc0640092401264f7574707574206d75737420636f6e7461696e20736f6d6520696e6c696e656420646174756d003301b3024301c323300100137566036607c6ea8008894ccc10000452f5c0264666444646600200200644a66608c0022006264660906e9ccc120dd4803198241822800998241823000a5eb80cc00c00cc128008c120004dd7181f8009bab304000133003003304400230420014901224f6e6c792061646120616c6c6f776564207769746820696e74656e7420746f6b656e00303f303c37540022ca6660780062980103d87a80001302d3303d303e0034bd701980c1818181380124812e4f6e6c7920612073696e676c65206f7574707574207769746820696e74656e7420746f6b656e20616c6c6f77656400330173375e6e98c04c00cdd31991299981c9818a4000297adef6c6013232330010014bd6f7b63011299981f80089982019bb0375200a6e9800d2f5bded8c0264646464a66608066e400240084cc110cdd81ba9009374c00e00a2a66608066e3c0240084cc110cdd81ba9009374c00e00626608866ec0dd48011ba600133006006003375660820066eb8c0fc008c10c008c104004c8cc0040052f5bded8c044a66607c00226607e66ec0dd4801a610101004bd6f7b630099191919299981f99b90007002133043337606ea401d3010101000051533303f3371e00e00426608666ec0dd4803a61010100003133043337606ea4008dd4000998030030019bad3040003375c607c004608400460800026eb8c094c0e4dd50029bae30163039375400a9212b4f6e6c7920612073696e676c6520696e74656e7420746f6b656e2073686f756c64206265206d696e74656400330280032302f3330153756602c60726ea8004dd71812981c9baa005375c602c60726ea8014c098cc0d8dd48021981b2610140004bd701bac301530343754604060686ea80acdd59806981a1baa302030343754056606e607060706070607060706070607060686ea8c080c0d0dd50158a5014a02a66606466e2000520001533303233300c488103313838000063758601660686ea8c080c0d0dd501589998050031bac301130343754604060686ea80acdd61810181a1baa302030343754056294058dd6981b18199baa00116533303030283301501500113301b0014890014c103d87a8000325333030302830313754002297adef6c6013756606a60646ea8004cc064c02cdd5980518189baa301d3031375405000264a66605e605660606ea80044dd7181a18189baa00116300d3030375404ea66605a6052605c6ea80044c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c94ccc108c1140084c8c8c8c8c8c8c926302b00b302a00c302a00d302900e302700f303b010533303f303b3040375402226464a666088608e004264931981b000919181798228011bae3043001163756608a00260826ea80445858c10c004c10c008dd698208009820801181f800981f801181e800981e801181d800981d801181c800981c801181b800981b801181a800981a801181980098179baa00116300f302e3754004a666056604e60586ea80044c8c8c8c8c8c94ccc0d0c0dc0084c8c926301a00430190051630350013035002303300130330023031001302d37540022c6600e601260586ea800524011e436f6c642072656620646174756d206d75737420626520696e6c696e6564003232533302b323300100102a22533303000114a0264a66605c64604e66601a6eacc038c0c4dd5180718189baa005375c603a60626ea8004dd7180718189baa001303300214a2266006006002606600220022ca666054604c60566ea80044c0bcc0b0dd50008b198069bac3008302b3754602e60566ea8088098888c94ccc0b14ccc0b0c090c0b4dd519808001980598171baa0041614a2200229414ccc0acc09cc0b0dd519807800980518169baa0031614a24605a605c605c605c605c605c605c605c605c00244464660020026464a6660586050605a6ea80044c0c4c0b8dd50008992999816981498171baa00113032302f37540022c6603e00491010130003301e0010053756603060586ea8c060c0b0dd5001912999815981398161baa001132323300100100522533303100114a0264a66605e66e3cdd7181a0010020a511330030030013034001375c6060605a6ea80044c8cdc49bad30313032001301b3301e375860620024660080080026eb0c0c0c0b4dd5000918159816181618161816000919198008008011129998150008a5eb7bdb1804c8c8c8c94ccc0accdc8a45000021533302b3371e9101000021003100513302f337606ea4008dd3000998030030019bab302c003375c6054004605c00460580024464a66604c601e604e6ea80044c0acc0a0dd50008b180418139baa002222325333026301e302737540022900009bad302b3028375400264a66604c603c604e6ea8004530103d87a80001330113756605660506ea8004008cc03c00c0088c09cc0a0004894ccc0880085288b18008009129998118008a40002602266004004604c002460466048604800244646600200200644a666046002298103d87a80001323253330223375e602060486ea80080144c058cc0980092f5c0266008008002604e004604a00244a66604000229000098071980100118118009299980d980b980e1baa0011323232325333022302500213232498c94ccc084c0740044c8c94ccc098c0a40084c9263019001163027001302337540062a66604260320022a66604860466ea800c526161630213754004602c0062c604600260460046042002603a6ea80045894ccc068c058c06cdd5000899191919299981098120010a4c2c6eb8c088004c088008dd71810000980e1baa00116232533301a301600113232533301f3022002149858dd71810000980e1baa0021533301a301200113232533301f3022002132498c05c00458c080004c070dd50010a99980d180180089919299980f981100109924c60240022c604000260386ea800854ccc068cdc3a400c00226464a66603e60440042649319299980e980c800899192999811181280109924c602a0022c6046002603e6ea800854ccc074c0540044c8c94ccc088c0940084c9263015001163023001301f37540042a66603a600c002264646464a666048604e00426493180b8018b1bae302500130250023023001301f37540042a66603a66e1d200600113232323253330243027002149858dd7181280098128011bae3023001301f37540042a66603a66e1d200800113232323253330243027002149858dd6981280098128011bae3023001301f37540042a66603a66e1d200a00115333020301f37540042930b0a99980e99b874803000454ccc080c07cdd50010a4c2c2c603a6ea800458c080004c070dd50010b180d1baa001370e900211191980080080191299980e8008a60103d87a8000132323232533301e3372200e0042a66603c66e3c01c0084c048cc088dd3000a5eb80530103d87a80001330060060033756603e0066eb8c074008c084008c07c00488c8cc00400400c894ccc0700045300103d87a8000132323232533301d3372200e0042a66603a66e3c01c0084c044cc084dd4000a5eb80530103d87a8000133006006003375a603c0066eb8c070008c080008c078004c00400488c94ccc058c0480044c8c94ccc06cc07800852616375c603800260306ea800854ccc058c0380044c8c94ccc06cc0780084c926323232533301e3021002132498cc04000c8cc02402400458dd6980f800980f8011bac301d001163758603800260306ea800858c058dd50009180c000980080091299980a8008a4000260066600400460300026e01200222323300100100322533301500114bd7009919299980a180280109980c00119802002000899802002000980c801180b80091191980080080191299980a0008a6103d87a800013232323253330153372200e0042a66602a66e3c01c0084c024cc0640052f5c0298103d87a80001330060060033016003375c60280046030004602c0026e95200022323300100100322533301200114984c8cc00c00cc058008c00cc0500048c94ccc030c0200044c8c94ccc044c0500084c9263005001163012001300e37540042a66601860080022646464646464a66602a60300042930b1bad30160013016002375a602800260280046eb4c048004c038dd50010b18061baa001232533300b30070011323253330103013002149858dd7180880098069baa0021533300b30030011323253330103013002149858dd7180880098069baa00216300b37540026e1d200214984d958c00400c94ccc018c008c01cdd50008991919192999806980800109924ca666014600c60166ea800c4c8c94ccc03cc04800852616375c602000260186ea800c5858dd698070009807001180600098041baa00116370e90001bac0015734aae7555cf2ab9f5740ae855d12601259fd8799f581c55871db8a58f10fddf48b92029827d168271e785646af257de85486c40ffff0001",
      },
    };
    const utxo_7 = {
      input: {
        outputIndex: 0,
        txHash:
          "5f759f3527a47632735470586a7ab2fbee4b4aa8b6504d52d52bc62fa8ec961a",
      },
      output: {
        address:
          "addr_test1qp0q40yv0ywzyzuv2mnjnjmha9wq83aay7t339ka5zkzx6xglkktstqua3rk63z02kwz3a9hthdk7jplugzzw6p6vcdqa39gds",
        amount: [
          { unit: "lovelace", quantity: "4000000" },
          {
            unit: "55871db8a58f10fddf48b92029827d168271e785646af257de85486c",
            quantity: "1",
          },
        ],
        dataHash:
          "a5a21bf7d9119e01f8cf04316dba1d9cdcacd998430728fdb938de8dad4b6c1f",
        plutusData:
          "d8799fd8799f581c0eb1e4ef980b3c308edd7b3ab64990d5240e5230286038cae5c634cdffd8799f581c1fdf3668220c08618b4f2e5e7cc54f70ca4b11fd2b6a3fbe678235f1ffd8799fd8799fa14130d8799f581cc6aa7af71f8ba577246149edf075d2edd9daa63980b7ca176799af6cffffd8799fd8799f58201c4ef054932bafcb4a59810f31fa0ed001d6611066938d1a1aef1d1237c0a441ff00ffd8799fd87a9f581ceafce55e4f0e057b495f77d8019577c56ae1fe188dc7e6d63f4f93b8ffd87a80ffd8799f581c32b7e3d552b2b18cb9bf1a39e6e1ce75f62c084f2b917a44c071a3bd40ffd8799f581cdbde35dec305604c1c8a596437802fd5e3468c8e92ce1781203e7bb74455534441ffd8799fd87a9f581c10fcea52f80dbc6e499106b02894173a2e60d21c6b3d1fe881d9495dffd87a80ffd8799fd8799f581cc6aa7af71f8ba577246149edf075d2edd9daa63980b7ca176799af6cffd87a80ff1903e801ffff",
        scriptHash: undefined,
      },
    };
    fetcher.addUTxOs([utxo_1, utxo_2, utxo_3, utxo_4, utxo_5, utxo_6, utxo_7]);

    const res = await evaluator.evaluateTx(txHex, {
      slotLength: SLOT_CONFIG_NETWORK.preprod.slotLength,
      zeroSlot: SLOT_CONFIG_NETWORK.preprod.zeroSlot,
      zeroTime: SLOT_CONFIG_NETWORK.preprod.zeroTime,
    });
    expect(res).toStrictEqual([
      {
        index: 0,
        tag: "MINT",
        budget: {
          mem: 508703,
          steps: 164980381,
        },
      },
    ]);
  });

  it("should fail evaluating incorrect tx", async () => {
    fetcher.addUTxOs([
      {
        input: {
          outputIndex: 0,
          txHash:
            "47ce1b14c0599bb377a3c73c20973e49adbd10e5090129879b068ca0aa4216c2",
        },
        output: {
          address:
            "addr_test1qql3kkt57ncf7zt5hej4un8ff79z6zra7dut08hnj9kzdv437u94wweqf3nftw8kd6mw03uv2hk7jscqyn47cm74lpwsju87pd",
          amount: [
            {
              quantity: "9979468933",
              unit: "lovelace",
            },
            {
              quantity: "1",
              unit: "0f6b02150cbcc7fedafa388abcc41635a9443afb860100099ba40f076d657368",
            },
          ],
        },
      },
      {
        input: {
          outputIndex: 0,
          txHash:
            "6213898aa37d5e585721f4ebdd16da2ac6cd9cd0e81318906dfeea3ebdf9f157",
        },
        output: {
          address:
            "addr_test1qql3kkt57ncf7zt5hej4un8ff79z6zra7dut08hnj9kzdv437u94wweqf3nftw8kd6mw03uv2hk7jscqyn47cm74lpwsju87pd",
          amount: [
            {
              quantity: "20000000",
              unit: "lovelace",
            },
          ],
        },
      },
    ]);

    const res = await evaluator
      .evaluateTx(
        "84a700d901028182582047ce1b14c0599bb377a3c73c20973e49adbd10e5090129879b068ca0aa4216c2000181825839003f1b5974f4f09f0974be655e4ce94f8a2d087df378b79ef3916c26b2b1f70b573b204c6695b8f66eb6e7c78c55ede9430024ebec6fd5f85d821b0000000252c63160a2581c0f6b02150cbcc7fedafa388abcc41635a9443afb860100099ba40f07a1446d65736801581cf1c9053e4e03414fc37092d0155682f96d20770afc13a07f00f057ffa14001021a000c6b250758207564366f82807a253ef1f25af3f04486ac49ecd7fb631da76a713b32580994d709a1581cf1c9053e4e03414fc37092d0155682f96d20770afc13a07f00f057ffa140010b582001208ac891cd1aefe984b233bb0f9c4ece236b172c279d14d4940a483d68ccb00dd90102818258206213898aa37d5e585721f4ebdd16da2ac6cd9cd0e81318906dfeea3ebdf9f15700a207d901028158a0589e01010032323232323225333002323232323253330073370e900018049baa00113253300949010f5468697320697320612074726163650016375c601660146ea800454cc02124010f5468697320697320612074726163650016300a300b003300900230080023008001300537540022930a99801a491856616c696461746f722072657475726e65642066616c736500136565734ae7155ceaab9e5742ae8905a182010082d8799f446d657368ff821a006acfc01ab2d05e00f5a11902d1a178386631633930353365346530333431346663333730393264303135353638326639366432303737306166633133613037663030663035376666a1646d657368a46b6465736372697074696f6e783254686973204e465420776173206d696e746564206279204d657368202868747470733a2f2f6d6573686a732e6465762f292e65696d6167657835697066733a2f2f516d527a6963705265757477436b4d36616f74754b6a4572464355443231334470775071364279757a4d4a617561696d656469615479706569696d6167652f6a7067646e616d656a4d65736820546f6b656e",
      )
      .catch((e) => {
        return e;
      });
    expect(res).toBeInstanceOf(Error);
    expect(res.message).toBe(
      JSON.stringify([
        {
          index: 0,
          budget: { mem: 550, steps: 1203691 },
          tag: "mint",
          errorMessage: "the validator crashed / exited prematurely",
          logs: ["This is a trace"],
        },
      ]),
    );
  });

  it("should log slot based on config", async () => {
    fetcher.addUTxOs([
      {
        input: {
          outputIndex: 0,
          txHash:
            "ac853ef4408d0084b1c99737c883170c8976cb468b864881927444937a90d5a2",
        },
        output: {
          address:
            "addr_test1wqvhc6hxxy4gh2mzapweac473r0z89zakkg3pu4npwvwkzqdytv06",
          amount: [
            {
              quantity: "5000000",
              unit: "lovelace",
            },
          ],
          plutusData: "d8799f1b00000193eaae9c4cff",
        },
      },
      {
        input: {
          outputIndex: 5,
          txHash:
            "6c9e579ed693ac8d01f2f2f3ef8230530020542ebe23687159c8518de66f0b00",
        },
        output: {
          address:
            "addr_test1qztvhvnujmd03j4cjr0x6lu87hlaqfdl3tyqw97tcnaw0kk5wsnj53x9v8dhupg6v8rzt48atr6zmrvlppkam7upd29sqeutm7",
          amount: [
            {
              quantity: "5000000",
              unit: "lovelace",
            },
          ],
        },
      },
    ]);

    const preprodEvaluator = new OfflineEvaluator(fetcher, "preprod");

    const res = await preprodEvaluator
      .evaluateTx(
        "84a600d9010281825820ac853ef4408d0084b1c99737c883170c8976cb468b864881927444937a90d5a20001828258390096cbb27c96daf8cab890de6d7f87f5ffd025bf8ac80717cbc4fae7dad474272a44c561db7e051a61c625d4fd58f42d8d9f086dddfb816a8b1a000ecc168258390096cbb27c96daf8cab890de6d7f87f5ffd025bf8ac80717cbc4fae7dad474272a44c561db7e051a61c625d4fd58f42d8d9f086dddfb816a8b1a0030ae9d021a000cd08d081a04b75da50b58209999a37fb76920d7323340579d1281f17ad738473c8a69a76c1f155aba58ecb30dd90102818258206c9e579ed693ac8d01f2f2f3ef8230530020542ebe23687159c8518de66f0b0005a207d901028159042059041d010100323232323232323225333002323232323253330073370e900118049baa001132332232533300b3370e900018069baa00213232533300d3370e900118079baa0011323232323232325330153372c9210a74696d655f6e6f773a20003732660026ea001d22010015330153372c92010b6c6f616e5f7465726d3a20003732660026ea0025220100153330143371001200e294454cc05524011c74696d655f6e6f77203e206c6f616e5f7465726d203f2046616c73650014a06002002444a6664666603a0062646464646601400266e29221012800533301e0021337149101035b5d2900006133714911035b5f2000333300900233714911025d29000062233300a00a00230070012233300a00a0020015333019337100049007099b80483c80400854ccc064cdc40012410004266e00cdc0241002800490068b1bac301b002375a60320026466ec0dd4180c8009ba7301a0013754006264a666036002266e292201027b7d00003133714911037b5f200032323300100100322533301e0011003132533301f00113233300a00a301e001337149101023a200033300a00a301f001005302000213233300a00a301e001337149101023a200033300a00a301f0013007330040040023020002302000133714910102207d000033756006264a666036002266e29221025b5d00003133714911035b5f2000333300600133714911015d000032233300700700230040012233300700700200137580066e292201022c2000133005375a00400226466e2922010268270032333001001337006e34009200133714910101270000322253330193371000490000800899191919980300319b8000548004cdc599b80002533301c33710004900a0a40c02903719b8b33700002a66603866e2000520141481805206e0043370c004901019b8300148080cdc70020011bae0022222323300100100522533301b0011005132533301c001133004301d002006133005301d00233003003001301d0012232330010010032253330143370e0029000099b8a48901300000315333014337100029000099b8a489012d003300200233702900000089980299b8400148050cdc599b803370a002900a240c00066002002444a66602266e2400920001001133300300333708004900a19b8b3370066e14009201448180004dd6980918081baa00114a064600260206ea8c004c040dd5001918090009bad3010300e37546020601c6ea800854cc0312412a65787065637420536f6d65284d79446174756d207b206c6f616e5f7465726d207d29203d20646174756d0016300f3010301030103010301030103010300d375400c601a002601a601c00260146ea800458c02cc03000cc028008c024008c024004c014dd50008a4c2a660069211856616c696461746f722072657475726e65642066616c736500136565734ae7155ceaab9e5573eae855d12ba40105a182000082d87980821a006acfc01ab2d05e00f5f6",
      )
      .catch((e) => {
        return e;
      });
    expect(res).toBeInstanceOf(Error);
    expect(res.message).toBe(
      JSON.stringify([
        {
          index: 0,
          budget: { mem: 122164, steps: 41878310 },
          tag: "spend",
          errorMessage: "the validator crashed / exited prematurely",
          logs: [
            "time_now: 1734809125000",
            "loan_term: 1734809132108",
            "time_now > loan_term ? False",
            "Validator returned false",
          ],
        },
      ]),
    );

    const mainnetEvaluator = new OfflineEvaluator(fetcher, "mainnet");

    const res2 = await mainnetEvaluator
      .evaluateTx(
        "84a600d9010281825820ac853ef4408d0084b1c99737c883170c8976cb468b864881927444937a90d5a20001828258390096cbb27c96daf8cab890de6d7f87f5ffd025bf8ac80717cbc4fae7dad474272a44c561db7e051a61c625d4fd58f42d8d9f086dddfb816a8b1a000ecc168258390096cbb27c96daf8cab890de6d7f87f5ffd025bf8ac80717cbc4fae7dad474272a44c561db7e051a61c625d4fd58f42d8d9f086dddfb816a8b1a0030ae9d021a000cd08d081a04b75da50b58209999a37fb76920d7323340579d1281f17ad738473c8a69a76c1f155aba58ecb30dd90102818258206c9e579ed693ac8d01f2f2f3ef8230530020542ebe23687159c8518de66f0b0005a207d901028159042059041d010100323232323232323225333002323232323253330073370e900118049baa001132332232533300b3370e900018069baa00213232533300d3370e900118079baa0011323232323232325330153372c9210a74696d655f6e6f773a20003732660026ea001d22010015330153372c92010b6c6f616e5f7465726d3a20003732660026ea0025220100153330143371001200e294454cc05524011c74696d655f6e6f77203e206c6f616e5f7465726d203f2046616c73650014a06002002444a6664666603a0062646464646601400266e29221012800533301e0021337149101035b5d2900006133714911035b5f2000333300900233714911025d29000062233300a00a00230070012233300a00a0020015333019337100049007099b80483c80400854ccc064cdc40012410004266e00cdc0241002800490068b1bac301b002375a60320026466ec0dd4180c8009ba7301a0013754006264a666036002266e292201027b7d00003133714911037b5f200032323300100100322533301e0011003132533301f00113233300a00a301e001337149101023a200033300a00a301f001005302000213233300a00a301e001337149101023a200033300a00a301f0013007330040040023020002302000133714910102207d000033756006264a666036002266e29221025b5d00003133714911035b5f2000333300600133714911015d000032233300700700230040012233300700700200137580066e292201022c2000133005375a00400226466e2922010268270032333001001337006e34009200133714910101270000322253330193371000490000800899191919980300319b8000548004cdc599b80002533301c33710004900a0a40c02903719b8b33700002a66603866e2000520141481805206e0043370c004901019b8300148080cdc70020011bae0022222323300100100522533301b0011005132533301c001133004301d002006133005301d00233003003001301d0012232330010010032253330143370e0029000099b8a48901300000315333014337100029000099b8a489012d003300200233702900000089980299b8400148050cdc599b803370a002900a240c00066002002444a66602266e2400920001001133300300333708004900a19b8b3370066e14009201448180004dd6980918081baa00114a064600260206ea8c004c040dd5001918090009bad3010300e37546020601c6ea800854cc0312412a65787065637420536f6d65284d79446174756d207b206c6f616e5f7465726d207d29203d20646174756d0016300f3010301030103010301030103010300d375400c601a002601a601c00260146ea800458c02cc03000cc028008c024008c024004c014dd50008a4c2a660069211856616c696461746f722072657475726e65642066616c736500136565734ae7155ceaab9e5573eae855d12ba40105a182000082d87980821a006acfc01ab2d05e00f5f6",
      )
      .catch((e) => {
        return e;
      });

    expect(res2).toBeInstanceOf(Error);
    expect(res2.message).toBe(
      JSON.stringify([
        {
          index: 0,
          budget: { mem: 122164, steps: 41878310 },
          tag: "spend",
          errorMessage: "the validator crashed / exited prematurely",
          logs: [
            "time_now: 1670692216000",
            "loan_term: 1734809132108",
            "time_now > loan_term ? False",
            "Validator returned false",
          ],
        },
      ]),
    );
  });
});
