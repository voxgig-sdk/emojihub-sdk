# Emojihub SDK utility: feature_add
module EmojihubUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
